import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { StoreService } from '../../../../core/services/store-service';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-ongoing-tasks',
  templateUrl: './ongoing-tasks.component.html',
  styleUrls: ['./ongoing-tasks.component.less']
})
export class OngoingTasksComponent implements OnDestroy {
  form: FormGroup;

  constructor(
    private _store: StoreService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _fb: FormBuilder) {

    const store = this._store.ongoingtasks.getValue();

    this.form = this._fb.group({
      pusSum: store ? store.pusSum : null,
      rhboSum: store ? store.rhboSum : null,
      rhrQuantity: store ? store.rhrQuantity : null,
      rhrMainQuantity: store ? store.rhrMainQuantity : null,
      rhrGeneralQuantity: store ? store.rhrGeneralQuantity : null,
      correctionalCoefficient: store ? store.correctionalCoefficient : null,
      time: store ? store.time : null,
      timeMain: store ? store.timeMain : null,
      quantityForRH: store ? store.quantityForRH : null,
      pus: store ? this._fb.array([...store.pus.map(el => this._fb.group(el))]) : this._fb.array([]),
      squre: store ? this._fb.array([...store.squre.map(el => this._fb.group(el))]) : this._fb.array([]),
    });

    if (!store || store.pus.length === 0) this.addPus();
    if (!store || store.squre.length === 0) this.addSquare();

    this.getPusum();
    this.getQuantityForRH();
  }

  ngOnDestroy() {
    this._store.setOngoingtasks(this.form.value);
  }

  getQuantityForRH() {

    combineLatest(
      this.getControllByname('rhboSum').valueChanges,
      this.getControllByname('correctionalCoefficient').valueChanges,
      this.getControllByname('rhrGeneralQuantity').valueChanges
    ).subscribe(() => {
      const p14 = +this.getControllByname('rhrGeneralQuantity').value;
      const p12 = +this.getControllByname('rhboSum').value;
      const p7 = +this.getControllByname('correctionalCoefficient').value;
      const value = (p12 / 30 * p14) * p7;
      if(value) this.getControllByname('timeMain').setValue(Math.ceil(value));
    });

    combineLatest(
      this.getControllByname('rhboSum').valueChanges,
      this.getControllByname('correctionalCoefficient').valueChanges,
      this.getControllByname('time').valueChanges
      ).subscribe(() => {
        const p12 = +this.getControllByname('rhboSum').value;
        const p7 = +this.getControllByname('correctionalCoefficient').value;
        const p8 = +this.getControllByname('time').value;
        const value = p12 / ((30/p7) * p8);
        if(value) this.getControllByname('quantityForRH').setValue(Math.ceil(value));
    })
  }

  getPusum() {

    this.getControllByname('squre').valueChanges.subscribe(() => {
      const arr = this.getControllByname('squre').value.map(el => +el.square);
      const sum = arr.reduce((s, c) => s + c );
      if(sum) this.getControllByname('rhboSum').setValue(sum);
    });

    this.getControllByname('pus').valueChanges.subscribe(() => {
      const arr = this.getControllByname('pus').value.map(el => +el.puSquare);
      const sum = arr.reduce((s, c) => s + c );
      if(sum) this.getControllByname('pusSum').setValue(sum);
    });
  }

  getControllByname(name: string) {
    return this.form.get(name)
  }



  get pusArr() {
    return this.form.get('pus') as FormArray
  }

  get square() {
    return this.form.get('squre') as FormArray
  }

  addPus() {
    this.pusArr.push(this._fb.group({
      puName: [null, Validators.pattern(/^[a-zа-яё]+$/i)],
      puSquare: [null, Validators.pattern(/^\d+$/)],
    }));
  }

  removePu(index) {
    const controls = this.form.get('pus') as FormArray;
    controls.removeAt(index)
  }
  removeSquare(index) {
    const controls = this.form.get('squre') as FormArray;
    controls.removeAt(index)
  }

  addSquare() {
    this.square.push(this._fb.group({
      squareName: [null, Validators.pattern(/^[a-zа-яё]+$/i)],
      square: [null, Validators.pattern(/^\d+$/)],
    }));
  }

  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }

}
