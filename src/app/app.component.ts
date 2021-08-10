import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "./http-client.service";
import { SendMoney } from './models/model';
import { SharedDataService } from './service/shared-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'negi-demo';

  constructor() {

  }

  ngOnInit(): void {
    console.log("ng Init")

  }
}
