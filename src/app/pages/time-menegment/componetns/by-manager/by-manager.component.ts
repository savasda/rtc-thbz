import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../../../core/services/store-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MANAGER_TIMING } from '../../../../core/entities/special-processing';

@Component({
  selector: 'app-by-manager',
  templateUrl: './by-manager.component.html',
  styleUrls: ['./by-manager.component.less']
})
export class ByManagerComponent implements OnInit, OnDestroy {
  managerTiming;

  constructor(
    private _store: StoreService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _fb: FormBuilder) { }

  ngOnInit() {
    if(this._store.managerTiming.getValue()) this.managerTiming = this._store.managerTiming.getValue();
    else this.managerTiming = MANAGER_TIMING
  }

  ngOnDestroy() {
    this._store.setManagerTiming(this.managerTiming)
  }

  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }
}
