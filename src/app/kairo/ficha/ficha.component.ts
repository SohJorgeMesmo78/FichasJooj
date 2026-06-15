import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import characterData from '../data/character.json';

interface Atributos {
  FOR: number;
  DEX: number;
  CON: number;
  INT: number;
  SAB: number;
  CAR: number;
}

interface Character {
  nome: string;
  raca: string;
  classe: string;
  nivel: number;
  subclasse: string;
  antecedente: { nome: string; livro: string };
  atributos: Atributos;
  pericias_proficientes: string[];
  outras_proficiencias: any;
  inventario: any;
  caracteristicas_magicas: any;
  magias: any;
  aparencia: any;
  tracos_personalidade: any[];
  tracos_raciais: any[];
  tracos_subclasse: any;
}

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.scss'
})
export class FichaComponent implements OnInit {
  character = characterData as any;

  // Status Base
  profBonus = 0;
  initiative = 0;
  atributosArray: any[] = [];
  periciasCalculadas: any[] = [];
  
  // Abas
  activeTab: 'ficha' | 'combate' | 'tracos' = 'ficha';

  // HP e Combate
  hpMax = 0;
  hpAtual = 0;
  hpTemp = 0;
  hpInput: number = 0;

  // Recursos (Bruxo nível 3 = 2 slots)
  spellSlotsMax = 2;
  spellSlotsAtual = 2;

  // Dados de Vida (D8)
  hitDiceMax = 0;
  hitDiceAtual = 0;
  
  // Transe Eladrin
  currentSeason = 'primavera';
  tranceProf1 = 'Escudo';
  tranceProf2 = 'Flauta';
  
  // Passo Feérico
  feyStepMax = 0;
  feyStepAtual = 0;

  // Modais
  showShortRestModal = false;
  hitDiceToSpend = 1;
  shortRestHealRolled = 0;
  
  showLongRestModal = false;
  tempSeason = 'primavera';
  tempProf1 = '';
  tempProf2 = '';

  // Modal de Detalhes
  showDetailsModal = false;
  selectedMagia: any = null;
  selectedInvocacao: any = null;
  selectedTraco: any = null;
  selectedItem: any = null;
  selectedHabilidade: string = ''; // 'fey_step' ou ''

  todasPericias = [
    { nome: 'Acrobacia', attr: 'DEX' },
    { nome: 'Arcanismo', attr: 'INT' },
    { nome: 'Atletismo', attr: 'FOR' },
    { nome: 'Atuação', attr: 'CAR' },
    { nome: 'Enganação', attr: 'CAR' },
    { nome: 'Furtividade', attr: 'DEX' },
    { nome: 'História', attr: 'INT' },
    { nome: 'Intimidação', attr: 'CAR' },
    { nome: 'Intuição', attr: 'SAB' },
    { nome: 'Investigação', attr: 'INT' },
    { nome: 'Lidar com Animais', attr: 'SAB' },
    { nome: 'Medicina', attr: 'SAB' },
    { nome: 'Natureza', attr: 'INT' },
    { nome: 'Percepção', attr: 'SAB' },
    { nome: 'Persuasão', attr: 'CAR' },
    { nome: 'Prestidigitação', attr: 'DEX' },
    { nome: 'Religião', attr: 'INT' },
    { nome: 'Sobrevivencia', attr: 'SAB' }
  ];

  isItemEquipped(nome: string): boolean {
    if (!this.character || !this.character.inventario || !this.character.inventario.itens) {
      return false;
    }
    const item = this.character.inventario.itens.find((i: any) => i.nome === nome);
    return item ? !!item.equipado : false;
  }

  get calculatedCA(): number {
    let baseCA = 10;
    const dexMod = this.getModifier(this.character.atributos.DEX);
    
    if (this.isItemEquipped('Armadura de Couro Batido')) {
      baseCA = 12;
    }
    
    let totalCA = baseCA + dexMod;
    
    if (this.isItemEquipped('Escudo')) {
      totalCA += 2;
    }
    
    return totalCA;
  }

  get caFormula(): string {
    const base = this.isItemEquipped('Armadura de Couro Batido') ? '12' : '10';
    const shield = this.isItemEquipped('Escudo') ? ' + 2' : '';
    return `${base} + Dex${shield}`;
  }

  ngOnInit() {
    this.profBonus = Math.ceil(this.character.nivel / 4) + 1;
    this.initiative = this.getModifier(this.character.atributos.DEX);

    const modCon = this.getModifier(this.character.atributos.CON);
    const modCar = this.getModifier(this.character.atributos.CAR);
    
    this.hpMax = 8 + modCon + ((5 + modCon) * (this.character.nivel - 1));
    this.hpAtual = this.hpMax;

    this.hitDiceMax = this.character.nivel;
    this.hitDiceAtual = this.hitDiceMax;
    
    // Passo Feérico usa = bônus proficiência
    this.feyStepMax = this.profBonus;
    this.feyStepAtual = this.feyStepMax;

    const attrKeys: (keyof Atributos)[] = ['FOR', 'DEX', 'CON', 'INT', 'SAB', 'CAR'];
    this.atributosArray = attrKeys.map(key => ({
      name: key,
      score: this.character.atributos[key],
      mod: this.getModifier(this.character.atributos[key])
    }));
    
    this.periciasCalculadas = this.todasPericias.map(p => {
      const isProficient = this.character.pericias_proficientes.includes(p.nome);
      const attrValue = (this.character.atributos as any)[p.attr];
      const attrMod = this.getModifier(attrValue);
      const finalBonus = isProficient ? attrMod + this.profBonus : attrMod;
      return { ...p, isProficient, finalBonus };
    });

    // Injetar os valores no Raio Místico dinamicamente
    const raioMistico = this.character.magias.nivel_0.find((m: any) => m.nome === 'Raio místico');
    if (raioMistico) {
      // Remover qualquer injeção anterior se houver recarregamento
      const baseDesc = raioMistico.descricao.split('\n\n**Explosão Agonizante')[0];
      raioMistico.descricao = baseDesc + `\n\n**Explosão Agonizante:** Você adiciona seu Modificador de Carisma (+${modCar}) ao dano. Dano total por acerto: 1d10+${modCar} de Energia.`;
    }

    this.applyTheme();
  }

  getModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  formatModifier(mod: number): string {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  }

  setTab(tab: 'ficha' | 'combate' | 'tracos') {
    this.activeTab = tab;
  }

  get seasonName() {
    switch (this.currentSeason) {
      case 'primavera': return 'Primavera';
      case 'verao': return 'Verão';
      case 'outono': return 'Outono';
      case 'inverno': return 'Inverno';
      default: return 'Primavera';
    }
  }

  get feyStepDC() {
    return 8 + this.profBonus + this.getModifier(this.character.atributos.CAR);
  }

  applyTheme() {
    if (typeof document !== 'undefined') {
      document.body.className = `kairo-theme theme-${this.currentSeason}`;
    }
  }

  // --- Lógica de Combate ---
  
  aplicarDano() {
    if (!this.hpInput || this.hpInput <= 0) return;
    
    let danoRestante = this.hpInput;

    if (this.hpTemp > 0) {
      if (this.hpTemp >= danoRestante) {
        this.hpTemp -= danoRestante;
        danoRestante = 0;
      } else {
        danoRestante -= this.hpTemp;
        this.hpTemp = 0;
      }
    }

    if (danoRestante > 0) {
      this.hpAtual -= danoRestante;
      if (this.hpAtual < 0) this.hpAtual = 0;
    }
    
    this.hpInput = 0;
  }

  aplicarCura() {
    if (!this.hpInput || this.hpInput <= 0) return;

    const curaTotal = this.hpAtual + this.hpInput;
    
    if (curaTotal > this.hpMax) {
      const excesso = curaTotal - this.hpMax;
      this.hpAtual = this.hpMax;
      if (excesso > this.hpTemp) {
        this.hpTemp = excesso;
      }
    } else {
      this.hpAtual = curaTotal;
    }

    this.hpInput = 0;
  }

  usarSlot() {
    if (this.spellSlotsAtual > 0) {
      this.spellSlotsAtual--;
    }
  }

  usarFeyStep() {
    if (this.feyStepAtual > 0) {
      this.feyStepAtual--;
    }
  }

  // --- Lógica de Descanso Longo (Transe) ---
  abrirDescansoLongo() {
    this.tempSeason = this.currentSeason;
    this.tempProf1 = this.tranceProf1;
    this.tempProf2 = this.tranceProf2;
    this.showLongRestModal = true;
  }

  fecharDescansoLongo() {
    this.showLongRestModal = false;
  }

  confirmarDescansoLongo() {
    this.hpAtual = this.hpMax;
    this.hpTemp = 0;
    this.spellSlotsAtual = this.spellSlotsMax;
    this.hitDiceAtual = this.hitDiceMax;
    this.feyStepAtual = this.feyStepMax;
    
    this.currentSeason = this.tempSeason;
    this.tranceProf1 = this.tempProf1 || 'Escudo';
    this.tranceProf2 = this.tempProf2 || 'Flauta';
    
    this.applyTheme();
    this.fecharDescansoLongo();
  }

  // --- Lógica de Descanso Curto ---
  abrirDescansoCurto() {
    this.spellSlotsAtual = this.spellSlotsMax;
    this.hitDiceToSpend = 1;
    this.shortRestHealRolled = 0;
    this.showShortRestModal = true;
  }

  fecharDescansoCurto() {
    this.showShortRestModal = false;
  }

  confirmarDescansoCurto() {
    if (this.hitDiceToSpend > this.hitDiceAtual) {
      alert('Você não tem essa quantidade de Dados de Vida!');
      return;
    }

    this.hitDiceAtual -= this.hitDiceToSpend;
    
    if (this.shortRestHealRolled > 0) {
      this.hpInput = this.shortRestHealRolled;
      this.aplicarCura();
    }
    
    this.fecharDescansoCurto();
  }

  // --- Lógica de Detalhes (Magias e Habilidades) ---
  abrirDetalhesMagia(magia: any) {
    this.selectedMagia = magia;
    this.selectedHabilidade = '';
    this.selectedInvocacao = null;
    this.selectedTraco = null;
    this.selectedItem = null;
    this.showDetailsModal = true;
  }

  abrirDetalhesHabilidade(habType: string) {
    this.selectedMagia = null;
    this.selectedInvocacao = null;
    this.selectedTraco = null;
    this.selectedItem = null;
    this.selectedHabilidade = habType;
    this.showDetailsModal = true;
  }

  abrirDetalhesInvocacao(inv: any) {
    this.selectedMagia = null;
    this.selectedHabilidade = '';
    this.selectedTraco = null;
    this.selectedItem = null;
    this.selectedInvocacao = inv;
    this.showDetailsModal = true;
  }

  abrirDetalhesTraco(traco: any) {
    this.selectedMagia = null;
    this.selectedHabilidade = '';
    this.selectedInvocacao = null;
    this.selectedTraco = traco;
    this.selectedItem = null;
    this.showDetailsModal = true;
  }

  abrirDetalhesItem(item: any) {
    this.selectedMagia = null;
    this.selectedHabilidade = '';
    this.selectedInvocacao = null;
    this.selectedTraco = null;
    this.selectedItem = item;
    this.showDetailsModal = true;
  }

  fecharDetalhes() {
    this.showDetailsModal = false;
  }
}
