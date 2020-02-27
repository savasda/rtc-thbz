import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../core/services/store-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BEFORE_EVENT_TIMING, DURING_EVENT_TIMING } from '../../../../core/entities/special-processing';

@Component({
  selector: 'app-duty-ivents',
  templateUrl: './duty-ivents.component.html',
  styleUrls: ['./duty-ivents.component.less']
})
export class DutyIventsComponent implements OnInit {

  dutyEventTiming;

  constructor(
    private _store: StoreService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _fb: FormBuilder) { }

  ngOnInit() {
    if(this._store.dutyEventTiming.getValue() && this._store.dutyEventTiming.getValue()[0].value) this.dutyEventTiming = this._store.dutyEventTiming.getValue();
    else this.dutyEventTiming = DURING_EVENT_TIMING
  }

  addMinutes(minutes) {
    if(this.dutyEventTiming[0].value && this.dutyEventTiming[0].value.getTime()) {
      return new Date(this.dutyEventTiming[0].value.getTime() + minutes*60000);
    } else {
      return "-"
    }
  }

  ngOnDestroy() {
    this._store.setBeforeEventTiming(this.dutyEventTiming)
  }

  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }


}
