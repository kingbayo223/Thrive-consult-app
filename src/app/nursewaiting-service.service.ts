import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NursewaitingServiceService {
  Patient: any[];
  
  bookPatient: any[];
 

  constructor(private http : HttpClient) { }

  public doRegisterPatient(sendPatients)
  {
    return this.http.post("http://localhost:8089//api/nursewaiting",sendPatients,{responseType:"text" as "json"});
  }
  public getRegPatient()
  {
    return this.http.get("http://localhost:8089/api/listNursewaiting");
  }

  

}
