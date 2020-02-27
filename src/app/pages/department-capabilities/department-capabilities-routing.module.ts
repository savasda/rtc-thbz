import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentCapabilitiesComponent } from './department-capabilities/department-capabilities.component';
import { SpecialProcessingComponent } from './components/special-processing/special-processing.component';
import { AerosolMaskingComponent } from './components/aerosol-masking/aerosol-masking.component';
import { PeriodicallyPerformedTasksComponent } from './components/periodically-performed-tasks/periodically-performed-tasks.component';
import { OngoingTasksComponent } from './components/ongoing-tasks/ongoing-tasks.component';


const routes: Routes = [
  { path: '', component: DepartmentCapabilitiesComponent},
  { path: 'special-processing', component: SpecialProcessingComponent},
  { path: 'aerosol-masking', component: AerosolMaskingComponent },
  { path: 'periodically-performed', component: PeriodicallyPerformedTasksComponent },
  { path: 'ongoing', component: OngoingTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentCapabilitiesRoutingModule { }
