import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  @Input()
  selectData : Array<String> = []
  constructor() { }

  ngOnInit(): void {
  }

}
