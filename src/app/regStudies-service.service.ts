import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecordsComponent } from './records/records.component';
import { RegModel } from './registerPatient';
import { RegStudies } from './regStudies';


@Injectable({
  providedIn: 'root'
})
export class RegStudiesServiceService {
  [x: string]: any;
  
  formData: RegStudies;
 
 studies: any[];
 

  constructor(private http : HttpClient) { }

  public doRegisterPatient(registerPatient)
  {
    return this.http.post("http://localhost:8089/api/regServices",registerPatient,{responseType:"text" as "json"});
  }

  public getRegPatient()
  {
    return this.http.get("http://localhost:8089/api/all-studies");
  }

  public editPatientByID(id)
  {
    return this.http.get("http://localhost:8089/api/editPatient/{id}");
  }
  
  public getRegStudies(id)
  {
    return this.http.get("http://localhost:8089/api/editStudies/{id}");
  }

  public getStudies(id)
  {
    return this.http.get("http://localhost:8089/api/study/{id}/studies");
  }
 
 
  public getProduct()
   {
    return this.http.get("http://localhost:8089/api/all-getProduct");
  }
 
  public getProduces()
   {
    return this.http.get("http://localhost:8089/api/produce");
  }


  public getProduction()
  {
    return this.http.get("http://localhost:8089/api/all-Production");
    
  }
  public getAmount(productName)
  {
    return this.http.get("http://localhost:8089/api/products/{productName}");
    
  }
  public getAmounts(productName)
  {
    return this.http.get("http://localhost:8089/api/amount");
    
  }
}
