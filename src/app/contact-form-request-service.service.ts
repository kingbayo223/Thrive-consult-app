import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactFormRequestServiceService {

  constructor(private http : HttpClient) { }

  
  public doSender(contact)
  {
    return this.http.post("http://localhost:8089/api/tailed",contact,{responseType:"text" as "json"});
  }
 
}
