import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeMenegmentComponent } from './time-menegment/time-menegment.component';
import { RegularComponent } from './componetns/regular/regular.component';
import { ByManagerComponent } from './componetns/by-manager/by-manager.component';
import { BeforeEventsComponent } from './componetns/before-events/before-events.component';
import { DutyIventsComponent } from './componetns/duty-ivents/duty-ivents.component';


const routes: Routes = [{
  path: '', component: TimeMenegmentComponent,
  }, {
    path: 'regular', component: RegularComponent,
  }, {
    path: 'bymanager', component: ByManagerComponent,
  },
  {
    path: 'before', component: BeforeEventsComponent
  }, {
    path: 'duty', component: DutyIventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeMenegmentRoutingModule { }
