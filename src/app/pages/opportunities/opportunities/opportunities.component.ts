import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StoreService } from '../../../core/services/store-service';
import { ActivatedRoute, Router } from '@angular/router';
import { OPPORTUNITIES_RHR, OPPORTUNITIES_SO, OPPORTUNITIES_AM, OPPORTUNITIES_OP, OPPORTUNITIES_OP_KOOF } from '../../../core/entities/special-processing';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.less']
})
export class OpportunitiesComponent implements OnDestroy{

  opportunities_rhr: Array<any>;
  opportunities_so: Array<any>;
  opportunities_am: Array<any>;
  opportunities_op: Array<any>;
  op_koofs = OPPORTUNITIES_OP_KOOF;

  constructor(
    private _store: StoreService,
    private _route: ActivatedRoute,
    private _router: Router,
    public _fb: FormBuilder) {
      const storeValue = this._store.opportunities_RHR.getValue();
      const storeValueSO = this._store.opportunities_SO.getValue();
      const storeValueAM = this._store.opportunities_AM.getValue();
      const storeValueOP = this._store.opportunities_OP.getValue();

      this.opportunities_rhr = storeValue !== null ? storeValue : OPPORTUNITIES_RHR;
      this.opportunities_so = storeValueSO !== null ? storeValueSO : OPPORTUNITIES_SO;
      this.opportunities_am = storeValueAM !== null ? storeValueAM : OPPORTUNITIES_AM;
      this.opportunities_op = storeValueOP !== null ? storeValueOP: OPPORTUNITIES_OP;
    }

    onCalculateOp() {
      setTimeout(() => {
        const p1 = +this.opportunities_op[0].value;
        const p2 = +this.opportunities_op[1].value
        let p3 = null;
        const p4 = +this.opportunities_op[3].value

        if(p1 && p2) {
          p3 = Math.ceil(p1 / this.opportunities_op[1].value);
          this.opportunities_op[2].value = p3;
        }

        if(p3 && p4) {
          console.log(p3,p4)
          this.opportunities_op[4].value = (+p3 * (100 - p4) / 100).toFixed(2);
        }
      },100)
    }

    onChangeOPcheckbox(clicked) {
      clicked.checked =  !clicked.checked;
      this.op_koofs.forEach(el => {
        el.koof_1.checked = false;
        el.koof_2.checked = false;
        el.koof_3.checked = false;
        el.koof_4.checked = false;
        el.koof_5.checked = false;
        el.koof_6.checked = false;
      });

      setTimeout(() => {
        this.opportunities_op[1].value = clicked.value;
        this.onCalculateOp();
      }, 2)
    }

    onCalculateAm() {
      const p1 = +this.opportunities_am[0].value;
      const p2 = +this.opportunities_am[1].value;
      const p3 = +this.opportunities_am[2].value;
      const p4 = +this.opportunities_am[3].value;

      if(p1 !== 0) {
        this.opportunities_am[4].value = p1 * 200;
        this.opportunities_am[5].value = p1 * 250;
        this.opportunities_am[6].value = p1 * 1000;
        this.opportunities_am[16].value = p1 * 100 * 1200;
        this.opportunities_am[17].value = p1 * 100 * 200;
        this.opportunities_am[18].value = p1 * 50 * 50;
        this.opportunities_am[19].value = p1 * 50 * 100;
      }else {
        this.opportunities_am[4].value = null;
        this.opportunities_am[5].value = null;
        this.opportunities_am[6].value = null;
        this.opportunities_am[16].value = null;
        this.opportunities_am[17].value = null;
        this.opportunities_am[18].value = null;
        this.opportunities_am[19].value = null;
      }

      if(p2 !== 0) {
        this.opportunities_am[7].value = p2 * 80;
        this.opportunities_am[8].value = p2 * 100;
        this.opportunities_am[9].value = p2 * 200;
      } else {
        this.opportunities_am[7].value = null;
        this.opportunities_am[8].value = null;
        this.opportunities_am[9].value = null;
      }

      if(p3 !== 0) {
        this.opportunities_am[10].value = p3 * 20;
        this.opportunities_am[11].value = p3 * 35;
        this.opportunities_am[12].value = p3 * 50;
      } else {
        this.opportunities_am[10].value = null;
        this.opportunities_am[11].value = null;
        this.opportunities_am[12].value = null;
      }

      if(p4 !== 0) {
        this.opportunities_am[13].value = p4*50;
        this.opportunities_am[14].value = p4*70;
        this.opportunities_am[15].value = p4*100;
      } else {
        this.opportunities_am[13].value = null;
        this.opportunities_am[14].value = null;
        this.opportunities_am[15].value = null;
      }

    }

    onCalculateRhr() {
      if(this.rhr(0).value) this.rhr(2).value = +this.rhr(0).value * 40;
      if(this.rhr(0).value) this.rhr(3).value = +this.rhr(0).value * 12;
      if(this.rhr(0).value && this.rhr(1).value) this.rhr(4).value = +this.rhr(0).value * 100 + +this.rhr(1).value * 4;
      else this.rhr(4).value = null
      if(this.rhr(0).value && this.rhr(1).value) this.rhr(5).value = +this.rhr(0).value * 30 + +this.rhr(1).value * 4;
      else this.rhr(5).value = null
    }

    onCalculateSo() {
     const p1 = +this.opportunities_so[0].value;
     const p2 = +this.opportunities_so[1].value;
     if(p1) this.opportunities_so[2].value = p1 * 8 + p2 * 12;
     else this.opportunities_so[2].value = 0;
     if(p1) this.opportunities_so[3].value = p1 * .5;
     else this.opportunities_so[3].value = 0;
    }

    rhr(index: number) {
      return this.opportunities_rhr[index];
    }

    ngOnDestroy() {
      this._store.opportunities_RHR.next(this.opportunities_rhr);
      this._store.opportunities_SO.next(this.opportunities_so);
      this._store.opportunities_AM.next(this.opportunities_am);
      this._store.opportunities_OP.next(this.opportunities_op);
    }
}
