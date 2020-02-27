import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';

const routes: Routes = [
  { path: '',  redirectTo: '/welcome', pathMatch: 'full', },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'capabilities', loadChildren: () => import('./pages/department-capabilities/department-capabilities.module').then(m => m.DepartmentCapabilitiesModule)},
  { path: 'timing', loadChildren: () => import('./pages/time-menegment/time-menegment.module').then(m => m.TimeMenegmentModule)},
  { path: 'opportunities', loadChildren: () => import('./pages/opportunities/opportunities.module').then(m => m.OpportunitiesModule)},
  { path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
