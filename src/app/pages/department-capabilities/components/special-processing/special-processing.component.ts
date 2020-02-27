import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../../core/services/store-service';
import { StoreSpecialProcessing, FieldType } from '../../../../core/entities/typings';
import { SPECIAL_PROCESSING_DATA, SPECIAL_PROCESSING_RESULT_DATA } from '../../../../core/entities/special-processing';

@Component({
  selector: 'app-special-processing',
  templateUrl: './special-processing.component.html',
  styleUrls: ['./special-processing.component.less']
})
export class SpecialProcessingComponent implements OnInit {
  listOfData = SPECIAL_PROCESSING_DATA;
  processingResult = SPECIAL_PROCESSING_RESULT_DATA;
  FieldType = FieldType;

  constructor(
    private _store: StoreService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const state = this._store.specialProcessingConditions.getValue();
    const resultstate = this._store.specialProcessingResult.getValue();
    if(state) this.listOfData = state.allItems;
    if(resultstate) this.processingResult = resultstate;
  }

  onBack() {
    this._router.navigate(['../'], {relativeTo: this._route})
  }

  onValueSelected(arr) {
    const data: StoreSpecialProcessing  = {
      allItems: this.listOfData,
      value: 0
    };
    setTimeout(() => {
      data.value = arr.filter(el => el.isChacked === true)
        .map(el => el.value)
        .reduce((a, b) => a * b);
      this._store.setSpecialProcessingConditions(data);
      this.processingResult[11].value = this._store.specialProcessingConditions.getValue() !== null ? this._store.specialProcessingConditions.getValue().value : 1;

    }, 2)
  }

  infiniteChack(val) {
    return !isNaN(val) && val !== 0 && isFinite(val);
  }

  onChangeField() {
    setTimeout(() => {
      const p3 = +(this.processingResult[2].value / this.processingResult[1].value).toFixed(2);
      this.processingResult[3].value = p3 > 1 ? 1 : p3;
      this.processingResult[4].value = (this.processingResult[0].value * this.processingResult[3].value).toFixed(2);
      this.processingResult[8].value = (this.processingResult[7].value / this.processingResult[6].value).toFixed(2);
      this.processingResult[9].value = (this.processingResult[5].value / this.processingResult[8].value).toFixed(2);
      this.processingResult[11].value = this._store.specialProcessingConditions.getValue() !== null ? this._store.specialProcessingConditions.getValue().value : 1;
      this.processingResult[13].value = ((this.processingResult[9].value * this.processingResult[11].value) / (this.processingResult[7].value * this.processingResult[10].value)).toFixed(2);
      this.processingResult[14].value = ((this.processingResult[9].value * this.processingResult[11].value) / (this.processingResult[12].value * this.processingResult[7].value)).toFixed(2);
      this.processingResult[19].value = (this.processingResult[15].value / (0.25 * this.processingResult[17].value)).toFixed(2);
      this.processingResult[20].value = (this.processingResult[16].value / (0.5 * this.processingResult[17].value)).toFixed(2);
      this.processingResult[22].value = ((.2*this.processingResult[19].value)*this.processingResult[18].value + .3*this.processingResult[19].value*(this.processingResult[18].value - 1)).toFixed(2);
      this.processingResult[23].value = ((.2*this.processingResult[20].value)*this.processingResult[18].value + .3*this.processingResult[20].value*(this.processingResult[18].value - 1)).toFixed(2);
      this.processingResult[24].value = (this.processingResult[15].value * (.2*this.processingResult[18].value + .3*(this.processingResult[18].value - 1)) / this.processingResult[21].value * .25).toFixed(2);
      this.processingResult[25].value = (this.processingResult[16].value * (.2*this.processingResult[18].value + .3*(this.processingResult[18].value - 1)) / this.processingResult[21].value * .5).toFixed(2);

      this._store.setSpecialProcessingResult(this.processingResult);
    },2)
    // console.log(this.processingResult)
  }

}
