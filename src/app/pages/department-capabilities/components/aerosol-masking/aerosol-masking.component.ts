import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../core/services/store-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AEROSOL_DATA } from '../../../../core/entities/special-processing';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AerosolResultInterface } from '../../../../core/entities/typings';

@Component({
  selector: 'app-aerosol-masking',
  templateUrl: './aerosol-masking.component.html',
  styleUrls: ['./aerosol-masking.component.less']
})
export class AerosolMaskingComponent implements OnInit{
  aerosolData = AEROSOL_DATA;
  registrationForm: FormGroup;


  constructor(
    private _store: StoreService,
    private _route: ActivatedRoute,
    private _router: Router,
    public _fb: FormBuilder) {

      const storeValue = this._store.aerosolResult.getValue();
      this.registrationForm = this._fb.group({
        sum: storeValue ? storeValue.sum : null,
        addDynamicElement: storeValue ? this._fb.array([...storeValue.addDynamicElement.map(el => this._fb.group(el))]) : this._fb.array([])
      });

      if(storeValue === null)  this.addItems();


    }

    ngOnInit() {
      this.registrationForm.valueChanges.subscribe(data => {
        this._store.setAerosolResult(data);
      })
    }


  get addDynamicElement() {
    return this.registrationForm.get('addDynamicElement') as FormArray
  }

  addItems() {
    this.addDynamicElement.push(this._fb.group({
      name: [null, Validators.pattern(/^[a-zа-яё]+$/i)],
      square: [null, Validators.pattern(/^\d+$/)],
      quantity: [null, Validators.pattern(/^\d+$/)],
      sumSquare: [null, Validators.pattern(/^\d+$/)],
    }));
  }

  remove(i) {
    const controls = this.registrationForm.get('addDynamicElement') as FormArray;
    controls.removeAt(i)
  }

  controlValue(i) {
    const controls = this.registrationForm.get('addDynamicElement') as FormArray;
    const val = isNaN(+controls.at(i).get('quantity').value * +controls.at(i).get('square').value) ? 0 : +controls.at(i).get('quantity').value * +controls.at(i).get('square').value;
    const sumTottal = controls.value.map(el =>  {
      if(el.sumSquare) return el.sumSquare;
    });
    const sum = sumTottal.reduce((s, c ) => {
      if(c) return  s  + c;
    });
    if(sum) this.registrationForm.get('sum').patchValue(sum);
    controls.at(i).get('sumSquare').patchValue(val);
    return controls.at(i).value
  }

  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
  }


  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }



}
