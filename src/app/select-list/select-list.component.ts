import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {

  @Input() 
  selectData : Array<String> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
