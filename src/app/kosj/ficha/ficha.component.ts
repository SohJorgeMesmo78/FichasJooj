import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PERSONAGEM_DATA } from '../data/personagem.data';

interface FeatureOrItem {
  name: string;
  action?: string;
  summary?: string;
  description: string;
  cost?: string;
  hit?: string; // Bônus de acerto
  roll?: string; // Rolagem de dano ou efeito
}

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.scss',
})
export class FichaComponent implements OnInit {
  pj = PERSONAGEM_DATA;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kosj-theme';
    }
  }

  useMetric = true;
  selectedItem: FeatureOrItem | null = null;
  showModal = false;
  activeTab: 'ficha' | 'combate' | 'tracos' = 'ficha';
  hpModInput: number | null = null;
  showShortRestModal = false;
  hitDiceInput: number = 1;
  shortRestResults: { die: number; mod: number; total: number }[] = [];
  totalHealed = 0;

  gastarKi(costStr: string | undefined, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (!costStr) return;
    const cost = parseInt(costStr, 10);
    if (!isNaN(cost) && this.kiAtual >= cost) {
      this.pj.ki_gasto = (this.pj.ki_gasto || 0) + cost;
    }
  }

  toggleUnit(): void {
    this.useMetric = !this.useMetric;
  }

  descansoCurto(): void {
    this.showShortRestModal = true;
    this.hitDiceInput = 1;
    this.shortRestResults = [];
    this.totalHealed = 0;
  }

  confirmarDescansoCurto(): void {
    if (this.hitDiceInput > this.pj.dados_vida_atual) {
      alert('Você não possui dados de vida suficientes!');
      return;
    }

    this.shortRestResults = [];
    let total = 0;
    const conMod = this.getModifier(this.getScore('Constituição'));

    for (let i = 0; i < this.hitDiceInput; i++) {
      const roll = Math.floor(Math.random() * 8) + 1;
      const rollTotal = roll + conMod;
      this.shortRestResults.push({ die: roll, mod: conMod, total: rollTotal });
      total += rollTotal;
    }

    this.totalHealed = total;
    this.pj.dados_vida_atual -= this.hitDiceInput;

    // Aplicar cura
    const vidaAtual = this.hpMax - this.pj.dano;
    const novaVida = Math.min(this.hpMax, vidaAtual + total);
    this.pj.dano = this.hpMax - novaVida;

    // Recuperar Ki e Resetar Estados (como já fazia)
    this.pj.ki_gasto = 0;
    this.pj.estados.bracosAstrais = false;
  }

  closeShortRestModal(): void {
    this.showShortRestModal = false;
  }

  descansoLongo(): void {
    // Monge recupera todo o Ki
    this.pj.ki_gasto = 0;
    // Recupera totalmente a vida e remove vida temporária
    this.pj.dano = 0;
    this.pj.vida_temporaria = 0;
    // Estados resetam
    this.pj.estados.bracosAstrais = false;

    // Recupera metade dos dados de vida (mínimo 1)
    const recuperacao = Math.max(1, Math.floor(this.dadosVidaMax / 2));
    this.pj.dados_vida_atual = Math.min(
      this.dadosVidaMax,
      this.pj.dados_vida_atual + recuperacao,
    );

    alert(`Descanso Longo concluído! 
- Vida e Ki TOTALMENTE restaurados.
- Recuperou ${recuperacao} Dados de Vida.`);
  }

  setTab(tab: 'ficha' | 'combate' | 'tracos'): void {
    this.activeTab = tab;
  }

  switchTab(tab: 'ficha' | 'combate' | 'tracos'): void {
    this.activeTab = tab;
  }

  openModal(item: any): void {
    if (!item.description) return;
    this.selectedItem = item;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedItem = null;
  }

  private getScore(name: string): number {
    return this.pj.atributos.find((a) => a.name === name)?.score || 10;
  }

  get proficiencia(): number {
    return Math.ceil(this.pj.nivel / 4) + 1;
  }

  get modFOR(): number {
    return this.getModifier(this.getScore('Força'));
  }
  get modDES(): number {
    return this.getModifier(this.getScore('Destreza'));
  }
  get modCON(): number {
    return this.getModifier(this.getScore('Constituição'));
  }
  get modINT(): number {
    return this.getModifier(this.getScore('Inteligência'));
  }
  get modSAB(): number {
    return this.getModifier(this.getScore('Sabedoria'));
  }
  get modCAR(): number {
    return this.getModifier(this.getScore('Carisma'));
  }

  get artesMarciaisDie(): string {
    if (this.pj.nivel >= 17) return 'd10';
    if (this.pj.nivel >= 11) return 'd8';
    if (this.pj.nivel >= 5) return 'd6';
    return 'd4';
  }

  get ca(): number {
    return 10 + this.modDES + this.modSAB;
  }

  get iniciativa(): string {
    return this.modDES >= 0 ? `+${this.modDES}` : `${this.modDES}`;
  }

  get deslocamento(): string {
    const base = 30;
    const bonus = this.pj.nivel >= 2 ? 10 : 0;
    const totalFeet = base + bonus;

    if (this.useMetric) {
      const totalMetros = Math.round(totalFeet / 3.28);
      return `${totalMetros} m`;
    }

    return `${totalFeet} ft`;
  }

  get hpMax(): number {
    const conMod = this.modCON;
    const rolls = (this.pj as any).vida_dados || [8];
    const sumDice = rolls.reduce((acc: number, curr: number) => acc + curr, 0);
    return sumDice + this.pj.nivel * conMod;
  }

  get pontosKi(): number {
    return this.pj.nivel >= 2 ? this.pj.nivel : 0;
  }

  get kiAtual(): number {
    return Math.max(0, this.pontosKi - (this.pj.ki_gasto || 0));
  }

  toggleBracosAstrais(ativo: boolean): void {
    if (ativo) {
      if (this.kiAtual >= 1) {
        this.pj.estados.bracosAstrais = true;
        this.pj.ki_gasto = (this.pj.ki_gasto || 0) + 1;
      } else {
        setTimeout(() => (this.pj.estados.bracosAstrais = false), 0);
      }
    } else {
      this.pj.estados.bracosAstrais = false;
    }
  }

  hasEnoughKi(costStr: string | undefined): boolean {
    if (!costStr) return true;
    const cost = parseInt(costStr, 10);
    if (isNaN(cost)) return true;
    return this.kiAtual >= cost;
  }

  get dadosVidaMax(): number {
    return this.pj.nivel;
  }

  get cdKi(): number {
    return 8 + this.proficiencia + this.modSAB;
  }

  get percepcaoPassiva(): number {
    const p = this.pj.pericias.find((p) => p.name === 'Percepção');
    let bonus = 0;
    if (p?.maestria) bonus = this.proficiencia * 2;
    else if (p?.treinado) bonus = this.proficiencia;
    return 10 + this.modSAB + bonus;
  }

  get hp_atual(): number {
    return Math.max(0, this.hpMax - (this.pj.dano || 0));
  }

  processarDano(): void {
    if (!this.hpModInput || this.hpModInput <= 0) return;
    let amount = this.hpModInput;

    // Absorve Temp HP primeiro
    if (this.pj.vida_temporaria > 0) {
      const absorbed = Math.min(amount, this.pj.vida_temporaria);
      this.pj.vida_temporaria -= absorbed;
      amount -= absorbed;
    }

    // O que sobrar vai para o dano real
    if (amount > 0) {
      this.pj.dano = (this.pj.dano || 0) + amount;
    }

    this.hpModInput = null; // limpa o input após uso
  }

  processarCura(): void {
    if (!this.hpModInput || this.hpModInput <= 0) return;
    let amount = this.hpModInput;

    // Cura o dano real primeiro (reduz o 'pj.dano')
    if (this.pj.dano > 0) {
      const heal = Math.min(amount, this.pj.dano);
      this.pj.dano -= heal;
      amount -= heal;
    }

    // O que sobrar vira Vida Temporária
    if (amount > 0) {
      this.pj.vida_temporaria = (this.pj.vida_temporaria || 0) + amount;
    }

    this.hpModInput = null;
  }

  // Agrupa todas as ações para o Guia de Combate
  get categorizedActions() {
    const actions: { [key: string]: any[] } = {
      A: [],
      BA: [],
      R: [],
      P: [],
    };

    // Adiciona Ataques como Ações
    const isAstral = this.pj.estados.bracosAstrais;
    actions['A'].push(
      {
        name: 'Artes Marciais (Ataque)',
        action: 'A',
        hit: isAstral
          ? this.formatMod(this.modSAB + this.proficiencia)
          : this.formatMod(this.modDES + this.proficiencia),
        roll: isAstral
          ? `1${this.artesMarciaisDie}${this.formatMod(this.modSAB)}`
          : `1${this.artesMarciaisDie}${this.formatMod(this.modDES)}`,
        description: isAstral
          ? 'Ataque usando sabedoria. Alcance ampliado em +1,5m (5 ft).'
          : 'Ação de ataque padrão do Monge.',
      },
      {
        name: 'Mordida',
        action: 'A',
        hit: this.formatMod(this.modFOR + this.proficiencia),
        roll: `1d6${this.formatMod(this.modFOR)}`,
        description: 'Ataque natural de Povo Lagarto.',
      },
    );

    // Adiciona Features do PJ (mapeando rolagens específicas se necessário)
    this.pj.features.forEach((f) => {
      const type = f.action.includes('/') ? f.action.split('/')[0] : f.action;
      let hit = '';
      let roll = '';

      // Lógica específica para rolagens de talentos conhecidos
      if (f.name === 'Defletir Projéteis') {
        roll = `1d10${this.formatMod(this.modDES + this.pj.nivel)}`;
      }

      const item = { ...f, hit, roll };
      if (actions[type as keyof typeof actions])
        actions[type as keyof typeof actions].push(item);

      if (f.action.includes('/')) {
        const type2 = f.action.split('/')[1];
        if (actions[type2 as keyof typeof actions])
          actions[type2 as keyof typeof actions].push(item);
      }
    });

    // Adiciona Habilidades de Ki
    this.pj.kiAbilities.forEach((k) => {
      let hit = '';
      let roll = '';

      if (k.name === 'Rajada de Golpes') {
        hit = this.formatMod(this.modDES + this.proficiencia);
        roll = `2x (1${this.artesMarciaisDie}${this.formatMod(this.modDES)})`;
      }

      if (actions[k.action as keyof typeof actions])
        actions[k.action as keyof typeof actions].push({ ...k, hit, roll });
    });

    return actions;
  }

  formatMod(mod: number): string {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  }

  getModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  getModifierString(score: number): string {
    const mod = this.getModifier(score);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  }

  getSkillTotal(pericia: any): string {
    const attrMod = this.getModifier(this.getScore(pericia.attr));
    let profBonus = 0;
    if (pericia.maestria) {
      profBonus = this.proficiencia * 2;
    } else if (pericia.treinado) {
      profBonus = this.proficiencia;
    }
    const total = attrMod + profBonus;
    return total >= 0 ? `+${total}` : `${total}`;
  }

  convertDistances(text: string): string {
    if (!text) return '';
    if (!this.useMetric) return text;

    return text.replace(/(\d+)\s*ft/g, (match, feet) => {
      const meters = Math.round(parseInt(feet) / 3.28);
      return `${meters} m`;
    });
  }

  formatText(text: string): string {
    let t = text;

    // Correção dos parênteses do de artes marciais
    t = t.replace(/artes marciais \(\)/gi, () => {
      return `artes marciais <span class="stat-calc" title="Ataque desarmado do monge (Nível ${this.pj.nivel})">(2${this.artesMarciaisDie})</span>`;
    });

    // 10 + seu modificador de Destreza + seu modificador de Sabedoria
    t = t.replace(
      /10 \+ seu modificador de Destreza \+ seu modificador de Sabedoria/gi,
      () => {
        return `<span class="stat-calc" title="10 + modificador de Destreza (${this.modDES}) + modificador de Sabedoria (${this.modSAB})">${this.ca}</span>`;
      },
    );

    // 1d10 + seu modificador de Destreza + seu nível de monge
    // Consertar qualquer erro de digitação original na regex ou no texto base:
    t = t.replace(
      /1d10 \+ s[eu]u? modificador de Destreza \+ seu nível de monge/gi,
      () => {
        const totalMod = this.modDES + this.pj.nivel;
        return `<span class="stat-calc" title="1d10 + modificador de Destreza (${this.modDES}) + seu nível de monge (${this.pj.nivel})">1d10${
          totalMod >= 0 ? '+' : ''
        }${totalMod}</span>`;
      },
    );

    // 8 + bônus de proficiência + mod Sabedoria
    t = t.replace(/8 \+ bônus de proficiência \+ mod Sabedoria/gi, () => {
      return `<span class="stat-calc" title="8 + bônus de proficiência (${this.proficiencia}) + mod Sabedoria (${this.modSAB})">${this.cdKi}</span>`;
    });

    // Queda Lenta: 5x seu nível de monge
    t = t.replace(/5x seu nível de monge/gi, () => {
      return `<span class="stat-calc" title="5 x nível (${this.pj.nivel})">${5 * this.pj.nivel}</span>`;
    });

    // Opcional: O dano de artes marciais isolado: um d4
    t = t.replace(/um d4/gi, () => {
      return `um <span class="stat-calc" title="Dado de Artes Marciais atual">${this.artesMarciaisDie}</span>`;
    });

    if (!this.useMetric) {
      t = t
        .replace(/3\s*m(etros)?/g, '10 ft')
        .replace(/15\s*m(etros)?/g, '50 ft')
        .replace(/1,5\s*m/g, '5 ft')
        .replace(/6\/18\s*metros/g, '20/60 ft');
    } else {
      t = t
        .replace(/10\s*ft/g, '3 m')
        .replace(/50\s*ft/g, '15 m')
        .replace(/5\s*ft/g, '1,5 m')
        .replace(/20\/60\s*ft/g, '6/18 m');
    }
    return t;
  }
}
