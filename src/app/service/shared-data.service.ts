import { Injectable } from '@angular/core';

import {  BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSet = new BehaviorSubject<any>(null);
  data = this.dataSet.asObservable()
  constructor() { }
 public insertData( data: any) {
    this.dataSet.next(data);
  }
}
