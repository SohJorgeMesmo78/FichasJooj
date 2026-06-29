import { Routes } from '@angular/router';
import { HomeComponent as SelectionComponent } from './home/home.component';

import { FichaComponent as KosjFichaComponent } from './kosj/ficha/ficha.component';
import { LacosComponent as KosjLacosComponent } from './kosj/lacos/lacos.component';
import { RacaComponent as KosjRacaComponent } from './kosj/raca/raca.component';
import { ClasseComponent as KosjClasseComponent } from './kosj/classe/classe.component';

import { FichaComponent as KairoFichaComponent } from './kairo/ficha/ficha.component';
import { LacosComponent as KairoLacosComponent } from './kairo/lacos/lacos.component';
import { RacaComponent as KairoRacaComponent } from './kairo/raca/raca.component';
import { ClasseComponent as KairoClasseComponent } from './kairo/classe/classe.component';

import { CharacterHomeComponent } from './shared/components/character-home/character-home.component';
import { CharacterHistoriaComponent } from './shared/components/character-historia/character-historia.component';

export const routes: Routes = [
  { path: '', component: SelectionComponent },
  {
    path: 'kosj',
    children: [
      { path: '', component: CharacterHomeComponent, data: { characterId: 'kosj' } },
      { path: 'ficha', component: KosjFichaComponent },
      { path: 'historia', component: CharacterHistoriaComponent, data: { characterId: 'kosj' } },
      { path: 'lacos', component: KosjLacosComponent },
      { path: 'raca', component: KosjRacaComponent },
      { path: 'classe', component: KosjClasseComponent }
    ]
  },
  {
    path: 'kairo',
    children: [
      { path: '', component: CharacterHomeComponent, data: { characterId: 'kairo' } },
      { path: 'ficha', component: KairoFichaComponent },
      { path: 'historia', component: CharacterHistoriaComponent, data: { characterId: 'kairo' } },
      { path: 'lacos', component: KairoLacosComponent },
      { path: 'raca', component: KairoRacaComponent },
      { path: 'classe', component: KairoClasseComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

