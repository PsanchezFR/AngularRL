import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dataField',
  templateUrl: './data-field-template.component.html',
  styleUrls: ['./data-field-template.component.css']
})
export class DataFieldTemplateComponent implements OnInit {

  parentMenu="test menu";
  constructor() {
  }

  ngOnInit() {
  }

}
