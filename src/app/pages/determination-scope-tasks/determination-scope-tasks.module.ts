import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeterminationScopeTasksRoutingModule } from './determination-scope-tasks-routing.module';
import { RazvedkaComponent } from './razvedka/razvedka.component';


@NgModule({
  declarations: [RazvedkaComponent],
  imports: [
    CommonModule,
    DeterminationScopeTasksRoutingModule
  ]
})
export class DeterminationScopeTasksModule { }
