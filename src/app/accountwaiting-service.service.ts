import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountwaitingServiceService {
  Patient: any[];
  
  bookAccount: any[];
 

  constructor(private http : HttpClient) { }

  public doRegisterPatient(sendPatients)
  {
    return this.http.post("http://localhost:8089//api/accountewaiting",sendPatients,{responseType:"text" as "json"});
  }
  public getRegPatient()
  {
    return this.http.get("http://localhost:8089/api/listAccountwaiting");
  }

  public getCurrentData()
  {
    return this.http.get("http://localhost:8089/api/getData/{id}");
  }


}
