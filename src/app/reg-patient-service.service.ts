import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecordsComponent } from './records/records.component';
import { RegModel } from './registerPatient';

@Injectable({
  providedIn: 'root'
})
export class RegPatientServiceService {
  
  formData: RegModel;
 
  registerPatient: any[];
 

  constructor(private http : HttpClient) { }

  public doRegisterPatient(registerPatient)
  {
    return this.http.post("http://localhost:8089/api/regpatient",registerPatient,{responseType:"text" as "json"});
  }
  public getRegPatient()
  {
    return this.http.get("http://localhost:8089/api/all-records");
  }

  public editPatientByID(id)
  {
    return this.http.get("http://localhost:8089/api/patient/{id}/edit");
  }
  

}
