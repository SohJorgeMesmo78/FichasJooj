import { Routes } from '@angular/router';
import { HomeComponent as SelectionComponent } from './home/home.component';

import { HomeComponent as KosjHomeComponent } from './kosj/home/home.component';
import { FichaComponent as KosjFichaComponent } from './kosj/ficha/ficha.component';
import { HistoriaComponent as KosjHistoriaComponent } from './kosj/historia/historia.component';
import { LacosComponent as KosjLacosComponent } from './kosj/lacos/lacos.component';
import { RacaComponent as KosjRacaComponent } from './kosj/raca/raca.component';
import { ClasseComponent as KosjClasseComponent } from './kosj/classe/classe.component';

import { HomeComponent as KairoHomeComponent } from './kairo/home/home.component';
import { FichaComponent as KairoFichaComponent } from './kairo/ficha/ficha.component';
import { HistoriaComponent as KairoHistoriaComponent } from './kairo/historia/historia.component';
import { LacosComponent as KairoLacosComponent } from './kairo/lacos/lacos.component';
import { RacaComponent as KairoRacaComponent } from './kairo/raca/raca.component';
import { ClasseComponent as KairoClasseComponent } from './kairo/classe/classe.component';

export const routes: Routes = [
  { path: '', component: SelectionComponent },
  {
    path: 'kosj',
    children: [
      { path: '', component: KosjHomeComponent },
      { path: 'ficha', component: KosjFichaComponent },
      { path: 'historia', component: KosjHistoriaComponent },
      { path: 'lacos', component: KosjLacosComponent },
      { path: 'raca', component: KosjRacaComponent },
      { path: 'classe', component: KosjClasseComponent }
    ]
  },
  {
    path: 'kairo',
    children: [
      { path: '', component: KairoHomeComponent },
      { path: 'ficha', component: KairoFichaComponent },
      { path: 'historia', component: KairoHistoriaComponent },
      { path: 'lacos', component: KairoLacosComponent },
      { path: 'raca', component: KairoRacaComponent },
      { path: 'classe', component: KairoClasseComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
