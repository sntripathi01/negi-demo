import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  countryCode = "US"
  langCode = "EN"

  data = `{
    "linksMapping": {
    "send-money-start": {
    "r3": "/send-money-estimate",
    "rn": "SEND_MONEY",
    "web": "${this.countryCode}/${this.langCode}/send-money/start"
    },
    "send-money-start2": {
    "r3": "/send-money-estimate",
    "rn": "SEND_MONEY",
    "web": "${this.countryCode}/${this.langCode}/send-money/start"
    },
    "send-money-start3": {
      "r3": "/send-money-estimate",
      "rn": "SEND_MONEY",
      "web": "${this.countryCode}/${this.langCode}/send-money/start"
      },
      "send-money-start4": {
        "r3": "/send-money-estimate",
        "rn": "SEND_MONEY",
        "web": "${this.countryCode}/${this.langCode}/send-money/start"
        }
    }}`

  constructor() { }

  getDataFromServer(){

   return JSON.parse(this.data)

  }
}
