import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeMenegmentRoutingModule } from './time-menegment-routing.module';
import { TimeMenegmentComponent } from './time-menegment/time-menegment.component';
import { RegularComponent } from './componetns/regular/regular.component';
import { ByManagerComponent } from './componetns/by-manager/by-manager.component';
import { BeforeEventsComponent } from './componetns/before-events/before-events.component';
import { DutyIventsComponent } from './componetns/duty-ivents/duty-ivents.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePipeModule } from '../../core/services/time.pipe';


@NgModule({
  declarations: [TimeMenegmentComponent, RegularComponent, ByManagerComponent, BeforeEventsComponent, DutyIventsComponent],
  imports: [
    CommonModule,
    TimeMenegmentRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    TimePipeModule
  ]
})
export class TimeMenegmentModule { }
