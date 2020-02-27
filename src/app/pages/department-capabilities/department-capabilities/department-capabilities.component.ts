import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';
declare var Treant: any;

@Component({
  selector: 'app-department-capabilities',
  templateUrl: './department-capabilities.component.html',
  styleUrls: ['./department-capabilities.component.less']
})
export class DepartmentCapabilitiesComponent implements OnInit, AfterViewInit {
  private SO_EVENTS_CKASS = 'SO_EVEN_NODE';
  private AEROSOL_EVENTS_CLASS = 'AEROSOL_NODE';
  private PERIODOCALY_PERFORMED = 'PERIODOCALY_PERFORMED';
  private ONGOING_TASKS = 'ONGOING_TASKS';


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
      text: { name: "Определение возможного объема задач РХБ защиты" },
      HTMLclass: 'disabled_node'
  };

  second_node_1 = {
    text: { name: "РХБ разведка" },
    parent: this.parent_node,
    HTMLclass: 'disabled_node'
  };
  second_node_2 = {
    text: { name: "Специальная обработка" },
    parent: this.parent_node,
    HTMLclass: this.SO_EVENTS_CKASS
  };
  second_node_3 = {
    text: { name: "Аэрозольная маскировка" },
    parent: this.parent_node,
    HTMLclass: this.AEROSOL_EVENTS_CLASS
  };

  third_node_1 = {
    text: { name: "Постоянно выполняемые задачи" },
    parent: this.second_node_1,
    HTMLclass: this.ONGOING_TASKS
  };
  third_node_2 = {
    text: { name: "Переодически выполняемые задачи" },
    parent: this.second_node_1,
    HTMLclass: this.PERIODOCALY_PERFORMED
  };

  simple_chart_config = [
    this.config, this.parent_node,
    this.second_node_1, this.second_node_2,
    this.second_node_3, this.third_node_2,
    this.third_node_1
  ];

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    Treant(this.simple_chart_config)
  }
  ngAfterViewInit() {
    this.addEventListeners();
  }

  addEventListeners() {
    const specialProcessing = document.getElementsByClassName(this.SO_EVENTS_CKASS)[0];
    const aerosol =  document.getElementsByClassName(this.AEROSOL_EVENTS_CLASS)[0];
    const periodicallyPerformed =  document.getElementsByClassName(this.PERIODOCALY_PERFORMED)[0];
    const ongoing = document.getElementsByClassName(this.ONGOING_TASKS)[0];

    specialProcessing.addEventListener('click', () => {
      this._router.navigate(['special-processing'], {relativeTo: this._route})
    });
    aerosol.addEventListener('click', () => {
      this._router.navigate(['aerosol-masking'], {relativeTo: this._route})
    });
    periodicallyPerformed.addEventListener('click', () => {
      this._router.navigate(['periodically-performed'], {relativeTo: this._route})
    });
    ongoing.addEventListener('click', () => {
      this._router.navigate(['ongoing'], {relativeTo: this._route})
    })
  }

}
