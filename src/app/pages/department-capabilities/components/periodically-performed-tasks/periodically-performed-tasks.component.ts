import { Component, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PERIODICALLY_PERFOMED_TASKS_KOOF, PERIODICALLY_PERFOMED_TASKS_SPEED, PERIODICALLY_PERFOMED_TASKS_OUT } from "../../../../core/entities/special-processing";
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";
import { combineLatest } from "rxjs";
import { StoreService } from "../../../../core/services/store-service";

@Component({
  selector: 'periodically-performed-tasks',
  templateUrl: './periodically-performed-tasks.component.html',
  styleUrls: ['./periodically-performed-tasks.component.less']
})
export class PeriodicallyPerformedTasksComponent implements OnDestroy {
  periodicallyPerfomedTasksData = PERIODICALLY_PERFOMED_TASKS_KOOF;
  periodicallyPerfomedTasksSpeedData = PERIODICALLY_PERFOMED_TASKS_SPEED;
  periodicallyPerfomedTasksSpeedOutData = PERIODICALLY_PERFOMED_TASKS_OUT;
  form: FormGroup;


  constructor(
    private _store: StoreService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _fb: FormBuilder) {

      const store = this._store.perreodicallyPerformedtasks.getValue();
      console.log();

      this.form = this._fb.group({
        routesSum: store ? store.routesSum : null,
        squreSum: store ? store.squreSum : null,
        permeabilityCoefficient: store ? store.permeabilityCoefficient : null,
        speedCoefficient: store ? store.speedCoefficient : null,
        correctionalCoefficient: store ? store.correctionalCoefficient : null,
        rhrQuantity: store ? store.rhrQuantity : null,
        timeToRhrRouts: store ? store.timeToRhrRouts : null,
        timeToChrRoutes: store ? store.timeToChrRoutes : null,
        timeToRhrByManager: store ? store.timeToRhrByManager : null,
        rhrQuantityByManagerTime: store ? store.rhrQuantityByManagerTime : null,
        radioQuantityByTime: store ? store.radioQuantityByTime : null,
        correctionalCoefficientSquare: store ? store.correctionalCoefficientSquare : null,
        quantityRhrMain: store ? store.quantityRhrMain : null,
        timeToRhrByManagerMain: store ? store.timeToRhrByManagerMain : null,
        timeToRadioDetection: store ? store.timeToRadioDetection : null,
        timeToChemDetection: store ? store.timeToChemDetection : null,
        needToRadioDetection: store ? store.needToRadioDetection : null,
        needToChemDetection: store ? store.needToChemDetection : null,
        routs: store ? this._fb.array([...store.routs.map(el => this._fb.group(el))]) : this._fb.array([]),
        squre: store ? this._fb.array([...store.squre.map(el => this._fb.group(el))]) : this._fb.array([]),
      });

      if (!store || store.routs.length === 0) this.addRoute();
      if (!store || store.squre.length === 0) this.addSquare();

      this.setTimeToRhr();
      this.setTimeToChr();
      this.setTimeToRhrByManager();
      this.setTimeToRadiodetection();
      this.setQuantityToDetecton();
    }

  setQuantityToDetecton() {
    combineLatest(
      this.form.get('squreSum').valueChanges,
      this.form.get('correctionalCoefficientSquare').valueChanges,
      this.form.get('timeToRhrByManagerMain').valueChanges
    ).subscribe(() => {
      const p19 = this.getValue('squreSum');
      const p20 = this.getValue('correctionalCoefficientSquare');
      const p22 = this.getValue('timeToRhrByManagerMain');
      if(p19 && p20 && p22) {
        const val = (p19 / (100/p20)) * p22;
        const val2 = (p19 / (30/p20)) * p22;
        this.form.get('needToRadioDetection').setValue(val.toFixed(2));
        this.form.get('needToChemDetection').setValue(val2.toFixed(2));
      }
    });

  }

  setTimeToRadiodetection() {
    combineLatest(
      this.form.get('squreSum').valueChanges,
      this.form.get('correctionalCoefficientSquare').valueChanges,
      this.form.get('quantityRhrMain').valueChanges
    ).subscribe(() => {
      const p19 = this.getValue('squreSum');
      const p20 = this.getValue('correctionalCoefficientSquare');
      const p21 = +this.getValue('quantityRhrMain');
      if(p19 && p20 && p21) {
        const val = (p19 / (100*p21)) * p20;
        const val2 = (p19 / (30*p21)) * p20;
        this.form.get('timeToRadioDetection').setValue(val.toFixed(2));
        this.form.get('timeToChemDetection').setValue(val2.toFixed(2));
      }
    })
  }

  setTimeToChr() {
    combineLatest(
      this.form.get('routesSum').valueChanges,
      this.form.get('permeabilityCoefficient').valueChanges,
      this.form.get('rhrQuantity').valueChanges,
      this.form.get('correctionalCoefficient').valueChanges
    ).subscribe(() => {
      const p7 = this.getValue('routesSum');
      const p9 = this.getValue('permeabilityCoefficient');
      const p10 = +this.getValue('rhrQuantity');
      const p11 = this.getValue('correctionalCoefficient');
      if(p7 && p9 && p10 && p11) {
        const val = p7 / (12 * p9*p11) + 0.05 * (p7/2) * p10;
        this.form.get('timeToChrRoutes').setValue(val.toFixed(2));
      }
    })
  }

  setTimeToRhrByManager() {
    combineLatest(
      this.form.get('routesSum').valueChanges,
      this.form.get('rhrQuantity').valueChanges,
      this.form.get('timeToRhrByManager').valueChanges
    ).subscribe(() => {
      const p7 = this.getValue('routesSum');
      const p10 = +this.getValue('rhrQuantity');
      const p14 = this.getValue('timeToRhrByManager');
      if(p7 && p10 && p14) {
        const val = p7 / (12 / (p10 * p14));
        const val2 = p7 / (10 / (p10 * p14));
        this.form.get('rhrQuantityByManagerTime').setValue(val.toFixed(2));
        this.form.get('radioQuantityByTime').setValue(val2.toFixed(2));
      }
    })
  }

  setTimeToRhr() {
    combineLatest(
      this.form.get('routesSum').valueChanges,
      this.form.get('permeabilityCoefficient').valueChanges,
      this.form.get('speedCoefficient').valueChanges,
      this.form.get('rhrQuantity').valueChanges,
      this.form.get('correctionalCoefficient').valueChanges
    ).subscribe(() => {
      const p7 = this.getValue('routesSum');
      const p9 = this.getValue('permeabilityCoefficient');
      const p8 = this.getValue('speedCoefficient');
      const p10 = +this.getValue('rhrQuantity');
      const p11 = this.getValue('correctionalCoefficient');
      if(p7 && p8 && p9 && p10 && p11) {
        const val = p7 / (p9*p8*p11) + 0.05 * (p7/2) * p10;
        this.form.get('timeToRhrRouts').setValue(val.toFixed(2));
      }
    })
  }

  getValue(name: string) {
    return this.form.get(name).value;
  }

  getPermeabilityCoefficient(state) {
    state.checked = !state.checked;
    this.periodicallyPerfomedTasksSpeedOutData.forEach((el: any) => {
      if(el.koof_1.hasOwnProperty('checked')) el.koof_1.checked = false;
      if(el.koof_2.hasOwnProperty('checked')) el.koof_2.checked = false;
    })
    setTimeout(() => {
      this.form.get('permeabilityCoefficient').setValue(state.checked === true ? state.value : null);
    }, 10);
  }

  getSpeedCoefficient(state) {
    state.checked = !state.checked;
    this.periodicallyPerfomedTasksSpeedData.forEach((el: any) => {
      if(el.koof_1.hasOwnProperty('checked')) el.koof_1.checked = false;
      if(el.koof_2.hasOwnProperty('checked')) el.koof_2.checked = false;
      if(el.koof_3.hasOwnProperty('checked')) el.koof_3.checked = false;
    })

    setTimeout(() => {
      this.form.get('speedCoefficient').setValue(state.checked === true ? state.value : null);
    }, 10);
  }

  get routs() {
    return this.form.get('routs') as FormArray
  }
  get square() {
    return this.form.get('squre') as FormArray
  }

  addRoute() {
    this.routs.push(this._fb.group({
      routeName: [null, Validators.pattern(/^[a-zа-яё]+$/i)],
      length: [null, Validators.pattern(/^\d+$/)],
      lengthhKoof: [null, Validators.pattern(/^\d+$/)],
      sumRoute: [null, Validators.pattern(/^\d+$/)],
    }));
  }

  addSquare() {
    this.square.push(this._fb.group({
      squareName: [null, Validators.pattern(/^[a-zа-яё]+$/i)],
      square: [null, Validators.pattern(/^\d+$/)],
      sumSquare: [null, Validators.pattern(/^\d+$/)],
    }));
  }

  removeRoute(index) {
    const controls = this.form.get('routs') as FormArray;
    controls.removeAt(index)
  }
  removeSquare(index) {
    const controls = this.form.get('squre') as FormArray;
    controls.removeAt(index)
  }

  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }

  controlRoutValue(i) {

    const squre = this.square.value.map(el => +el.square).reduce((s, c ) => {
      if(c) return  s  + c;
    });

    if(squre) this.form.get('squreSum').patchValue(squre);

    const val = isNaN(+this.routs.at(i).get('length').value * +this.routs.at(i).get('lengthhKoof').value) ? 0 : +this.routs.at(i).get('length').value * +this.routs.at(i).get('lengthhKoof').value;

    const sumTottal = this.routs.value.map(el =>  {
      if(el.sumRoute) return el.sumRoute;
    });

    const sum = sumTottal.reduce((s, c ) => {
      if(c) return  s  + c;
    });

    if(sum) this.form.get('routesSum').patchValue(sum);
    this.routs.at(i).get('sumRoute').patchValue(val);
    return this.routs.at(i).value
  }

  ngOnDestroy() {
    this._store.setPerreodicallyPerformedtasks(this.form.value);
  }
}
