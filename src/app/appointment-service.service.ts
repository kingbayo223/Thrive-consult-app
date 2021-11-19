import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http : HttpClient) { }

  public doAppointment(appointment)
  {
    return this.http.post("http://localhost:8089/api/appoint",appointment,{responseType:"text" as "json"});
  }
  
  public doSender(appointment)
  {
    return this.http.post("http://localhost:8089/api/getdetails",appointment,{responseType:"text" as "json"});
  }
 

  public getAppointmentModel()
  {
    return this.http.get("http://localhost:8089/api/all-appointments");
  }
  public getServices()
  {
    return this.http.get("http://localhost:8089/api/Invest");
  }


}
