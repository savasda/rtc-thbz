import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StoreSpecialProcessing, SpecialProcessingREsult, AerosolResultInterface } from "../entities/typings";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  /**Специальная обработка */
  /**Данные таблицы "Условия выполнения мероприятий"*/
  specialProcessingConditions = new BehaviorSubject<StoreSpecialProcessing>(null);
  setSpecialProcessingConditions(value: StoreSpecialProcessing) {
    this.specialProcessingConditions.next(value);
  };

  /**Данные из таблицы "Условия выполнения мероприятий"*/
  specialProcessingResult = new BehaviorSubject<Array<SpecialProcessingREsult>>(null);
  setSpecialProcessingResult(value: Array<SpecialProcessingREsult>) {
    this.specialProcessingResult.next(value);
  };

  /**Аэрозольная маскировка */
  aerosolResult = new BehaviorSubject<AerosolResultInterface>(null);
  setAerosolResult(value: AerosolResultInterface){
    this.aerosolResult.next(value);
  }

  /**Переодически выполняемые задачи */
  perreodicallyPerformedtasks = new BehaviorSubject<any>(null);
  setPerreodicallyPerformedtasks(value: any) {
    this.perreodicallyPerformedtasks.next(value);
  }

  /**Постоянно выполняемые задачи */
  ongoingtasks = new BehaviorSubject<any>(null);
  setOngoingtasks(value: any) {
    this.ongoingtasks.next(value);
  }

  /**расчет времени согласно расчета старшего начальника */
  managerTiming = new BehaviorSubject<Array<{name: string; value: any}>>(null);
  setManagerTiming(val: Array<any>) {
    this.managerTiming.next(val)
  }

   /**расчет времени заблаговременно */
  beforeEventTiming = new BehaviorSubject<any>(null);
  setBeforeEventTiming(val: any) {
    this.beforeEventTiming.next(val);
  }
  /**расчет времени во время действий */
  dutyEventTiming = new BehaviorSubject<any>(null);
  setDutyEventTiming(val: any) {
    this.dutyEventTiming.next(val);
  }

  /**Возможности подразделений РХР*/
  opportunities_RHR = new BehaviorSubject<any>(null);
  setOpportunities(val: any) {
    this.opportunities_RHR.next(val);
  }

  /**Возможности подразделений СО*/
  opportunities_SO = new BehaviorSubject<any>(null);
  setOpportunitiesSO(val: any) {
    this.opportunities_SO.next(val);
  }

  /**Возможности подразделений AM*/
  opportunities_AM = new BehaviorSubject<any>(null);
  setOpportunitiesAM(val: any) {
    this.opportunities_AM.next(val);
  }

   /**Возможности подразделений AM*/
   opportunities_OP = new BehaviorSubject<any>(null);
   setOpportunitiesOP(val: any) {
     this.opportunities_OP.next(val);
   }


}
