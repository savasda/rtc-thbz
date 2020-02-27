import { Component } from "@angular/core";
import { StoreService } from "../../core/services/store-service";
import { StoreSpecialProcessing, SpecialProcessingREsult, AerosolResultInterface } from "../../core/entities/typings";

@Component({
  selector: 'result',
  styleUrls: ['./result.component.less'],
  templateUrl: './result.component.html'
})
export class ResultComponent {
  perreodicallyPerformedtasks: any;
  specialProcessingResult: SpecialProcessingREsult[];
  aerosolResult: AerosolResultInterface;
  ongoingtasks: any;
  managerTiming: Array<any>;

  storeValueRHR: Array<any>;
  storeValueSO: Array<any>;
  storeValueAM: Array<any>;
  storeValueOP: Array<any>;

  constructor(private _store: StoreService) {
    this.aerosolResult = this._store.aerosolResult.getValue();
    this.perreodicallyPerformedtasks = this._store.perreodicallyPerformedtasks.getValue();
    this.specialProcessingResult = this._store.specialProcessingResult.getValue();
    this.ongoingtasks = this._store.ongoingtasks.getValue();
    this.managerTiming = this._store.managerTiming.getValue();
    this.storeValueRHR = this._store.opportunities_RHR.getValue();
    this.storeValueSO = this._store.opportunities_SO.getValue();
    this.storeValueAM = this._store.opportunities_AM.getValue();
    this.storeValueOP = this._store.opportunities_OP.getValue();
    console.log(this.storeValueOP)
  }

  get routsLength() {
    return this.perreodicallyPerformedtasks.routs.length
  }
  get squareLength () {
    return this.perreodicallyPerformedtasks.squre.length
  }

}
