import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var Treant: any;

@Component({
  selector: 'app-time-menegment',
  templateUrl: './time-menegment.component.html',
  styleUrls: ['./time-menegment.component.less']
})
export class TimeMenegmentComponent  {

  private SO_EVENTS_CKASS = 'SO_EVEN_NODE';
  private AEROSOL_EVENTS_CLASS = 'AEROSOL_NODE';
  private ONGOING_TASKS = 'ONGOING_TASKS';

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  config = {
    container: "#tree-simple",
    nodeAlign: "BOTTOM",
    connectors: {
        type: 'step'
    },
    node: {
        HTMLclass: 'graph-node'
    }
  };

  parent_node = {
      text: { name: "Расчет времени" },
      HTMLclass: 'disabled_node'
  };

  second_node_1 = {
    text: { name: "Типовой расчет времени" },
    parent: this.parent_node,
    HTMLclass: 'disabled_node'
  };
  second_node_2 = {
    text: { name: "Согласно расчета времени старшего начальника" },
    parent: this.parent_node,
    HTMLclass: this.SO_EVENTS_CKASS
  };

  second_node_3 = {
    text: { name: "Заблаговременно" },
    parent: this.second_node_1,
    HTMLclass: this.AEROSOL_EVENTS_CLASS
  };

  third_node_1 = {
    text: { name: "В ходе боевых действий" },
    parent: this.second_node_1,
    HTMLclass: this.ONGOING_TASKS
  };

  simple_chart_config = [
    this.config, this.parent_node,
    this.second_node_1, this.second_node_2,
    this.second_node_3,
    this.third_node_1
  ];

  ngOnInit() {
    Treant(this.simple_chart_config)
  }
  ngAfterViewInit() {
    this.addEventListeners();
  }
  addEventListeners() {
    const ongoing = document.getElementsByClassName(this.ONGOING_TASKS)[0];
    const aerosol =  document.getElementsByClassName(this.AEROSOL_EVENTS_CLASS)[0];
    const specialProcessing = document.getElementsByClassName(this.SO_EVENTS_CKASS)[0];
    specialProcessing.addEventListener('click', () => {
      this._router.navigate(['bymanager'], {relativeTo: this._route})
    });
    aerosol.addEventListener('click', () => {
      this._router.navigate(['before'], {relativeTo: this._route})
    });
    ongoing.addEventListener('click', () => {
      this._router.navigate(['duty'], {relativeTo: this._route})
    })
  }

}
