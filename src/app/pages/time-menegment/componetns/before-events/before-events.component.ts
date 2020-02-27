import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../core/services/store-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MANAGER_TIMING, BEFORE_EVENT_TIMING } from '../../../../core/entities/special-processing';

@Component({
  selector: 'app-before-events',
  templateUrl: './before-events.component.html',
  styleUrls: ['./before-events.component.less']
})
export class BeforeEventsComponent implements OnInit {

  beforeEventTiming;

  constructor(
    private _store: StoreService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _fb: FormBuilder) { }

  ngOnInit() {
    if(this._store.beforeEventTiming.getValue() && this._store.beforeEventTiming.getValue()[0].value) this.beforeEventTiming = this._store.beforeEventTiming.getValue();
    else this.beforeEventTiming = BEFORE_EVENT_TIMING;
  }

  addMinutes(minutes) {
    var today = new Date();
    if(this.beforeEventTiming[0].value && this.beforeEventTiming[0].value.getTime()) {
      return new Date(this.beforeEventTiming[0].value.getTime() + minutes*60000);
    } else {
      return "-"
    }
  }

  ngOnDestroy() {
    this._store.setBeforeEventTiming(this.beforeEventTiming)
  }

  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }

}
