import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentCapabilitiesRoutingModule } from './department-capabilities-routing.module';
import { DepartmentCapabilitiesComponent } from './department-capabilities/department-capabilities.component';
import { SpecialProcessingComponent } from './components/special-processing/special-processing.component';
import { AerosolMaskingComponent } from './components/aerosol-masking/aerosol-masking.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { PeriodicallyPerformedTasksComponent } from './components/periodically-performed-tasks/periodically-performed-tasks.component';
import { OngoingTasksComponent } from './components/ongoing-tasks/ongoing-tasks.component';


@NgModule({
  declarations: [
    DepartmentCapabilitiesComponent,
    SpecialProcessingComponent,
    AerosolMaskingComponent,
    PeriodicallyPerformedTasksComponent,
    OngoingTasksComponent
  ],
  imports: [
    CommonModule,
    DepartmentCapabilitiesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ]
})
export class DepartmentCapabilitiesModule { }
