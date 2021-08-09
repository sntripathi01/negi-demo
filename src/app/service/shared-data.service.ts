import { Injectable } from '@angular/core';

import {  BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSet = new BehaviorSubject<any>(null);

  public insertData( data: any) {
    this.dataSet.next(data);
  }

  public getData(): Observable<any> {
  return this.dataSet.asObservable();
  }
  
  constructor() { }
 
}
