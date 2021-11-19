import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NurseServiceService {
  Patient: any[];
  
  bookPatient: any[];
  nurseVitals: any[];
 

  constructor(private http : HttpClient) { }

  public doRegisterPatient(sendPatients)
  {
    return this.http.post("http://localhost:8089//api/nurse",sendPatients,{responseType:"text" as "json"});
  }
  public getRegPatient()
  {
    return this.http.get("http://localhost:8089/api/listNurse");
  }

  

}
