import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecordsComponent } from './records/records.component';
import { RegModel } from './registerPatient';
import { RegPayment } from './regPayment';

@Injectable({
  providedIn: 'root'
})
export class RegStudiesServiceService {
  
  formData: RegPayment;
 
 studies: any[];
 

  constructor(private http : HttpClient) { }

  public doRegisterPatient(registerPatient)
  {
    return this.http.post("http://localhost:8089/api/pay",registerPatient,{responseType:"text" as "json"});
  }
  public getRegStudies()
  {
    return this.http.get("http://localhost:8089/api/listPayment");
  }

  public editPatientByID(id)
  {
    return this.http.get("http://localhost:8089/api/editPatient/{id}");
  }
  

}
