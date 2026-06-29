import { Injectable } from '@angular/core';
import { KAIRO_HISTORIA, KairoCapitulo } from '../data/kairo-historia.data';
import { HISTORIA_DATA, HistoriaStep } from '../data/kosj-historia.data';

export interface CharacterConfig {
  id: string;
  nome: string;
  avatarUrl: string;
  themeClass: string;
  raca: string;
  racaLink: string;
  racaUnderConstruction: boolean;
  classe: string;
  classeLink: string;
  classeUnderConstruction: boolean;
  lacosUnderConstruction: boolean;
  historiaDesc: string;
  fichaDesc: string;
  lacosDesc: string;
  bottomActions: { label: string; link: string; icon: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private configs: Record<string, CharacterConfig> = {
    kosj: {
      id: 'kosj',
      nome: 'Kosj',
      avatarUrl: 'assets/kosj/kosj_avatar_redondo.png',
      themeClass: 'kosj-theme',
      raca: 'Povo Lagarto',
      racaLink: '/kosj/raca',
      racaUnderConstruction: false,
      classe: 'Monge do Caminho do Eu Astral',
      classeLink: '/kosj/classe',
      classeUnderConstruction: false,
      lacosUnderConstruction: false,
      historiaDesc: 'A origem e a jornada do herói...',
      fichaDesc: 'Atributos, habilidades e conhecimentos...',
      lacosDesc: 'Família, aliados e inimigos destas terras...',
      bottomActions: [
        { label: 'Ver Ficha de Personagem', link: '/kosj/ficha', icon: '📜' },
        { label: 'Ver Traços Raciais', link: '/kosj/raca', icon: '🍃' },
        { label: 'Ver Laços de Amizade', link: '/kosj/lacos', icon: '👥' }
      ]
    },
    kairo: {
      id: 'kairo',
      nome: 'Kairo',
      avatarUrl: 'avatar.png',
      themeClass: 'kairo-theme theme-primavera', // Estação inicial de Kairo
      raca: 'Eladrin Feérico',
      racaLink: '/kairo/raca',
      racaUnderConstruction: true,
      classe: 'Bruxo do Pacto do Tomo',
      classeLink: '/kairo/classe',
      classeUnderConstruction: true,
      lacosUnderConstruction: true,
      historiaDesc: 'A lenda esquecida...',
      fichaDesc: 'Atributos e perícias arcanas...',
      lacosDesc: 'Família, aliados e inimigos feéricos...',
      bottomActions: [
        { label: 'Ver Ficha de Personagem', link: '/kairo/ficha', icon: '📜' },
        { label: 'Ver Traços Raciais', link: '/kairo/raca', icon: '🍃' }
      ]
    }
  };

  getCharacterConfig(id: string): CharacterConfig {
    return this.configs[id];
  }

  getCharacterHistory(id: string): any[] {
    if (id === 'kairo') {
      return KAIRO_HISTORIA;
    }
    return HISTORIA_DATA;
  }
}
