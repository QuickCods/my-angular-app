// app.routes.ts
import { Routes } from '@angular/router';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { CrewDetailComponent } from './components/crew-detail/crew-detail.component';
import { CrewFormComponent } from './components/crew-form/crew-form.component';

export const routes: Routes = [
  { path: '', component: CrewListComponent },
  { path: 'details/:id', component: CrewDetailComponent },
  { path: 'create', component: CrewFormComponent },
  { path: 'edit/:id', component: CrewFormComponent },
  { path: '**', redirectTo: '' },
];
