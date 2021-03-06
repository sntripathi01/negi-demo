import { Component, Input, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { SendMoney } from '../models/model';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'negi-demo';
  selectData : Array<String> = ['A', 'B', 'C']
  formData: any;
  data: Array<SendMoney> = [];
  dataShared: Array<SendMoney> = [];

  constructor(public service: HttpClientService, public  sharedDataService: SharedDataService) {

  }

  ngOnInit(): void {
    console.log("ng Init")

    this.formData = this.service.getDataFromServer();
    console.log("data =" + JSON.stringify(this.service.getDataFromServer()))

    


    for (let key in this.formData["linksMapping"]) {
      let sendMoney = {} as SendMoney;
      sendMoney.title = key;
      sendMoney.r3 = this.formData["linksMapping"][key].r3;
      sendMoney.rn = this.formData["linksMapping"][key].rn;
      sendMoney.web = this.formData["linksMapping"][key].web;
      this.data.push(sendMoney)
    }

    this.sharedDataService.insertData(this.data);

    this.sharedDataService.getData().subscribe(dataObject =>{
      this.dataShared = dataObject;
      console.log("dataShared =" + JSON.stringify(this.dataShared))
    })

    console.log("linkMappingObject =" + JSON.stringify(this.data))
  }

  updateData(title: string ,r3: string, rn: string, web: string){

   const objIndex = this.data.findIndex((obj => obj.title === title));
  
   this.data[objIndex].r3 = r3;
   this.data[objIndex].rn = rn;
   this.data[objIndex].web = web;

   console.log("Updated data = "+JSON.stringify(this.data))
   //call service to update data

  }

  deleteData(key: string) {
    this.data = this.data.filter(item => item.title != key)
    //call service to update data
  }


}
