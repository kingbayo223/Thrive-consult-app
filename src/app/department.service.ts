import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departments } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 
  formData: Departments;
  constructor(private http : HttpClient) { }

  public findAllDepartments()
  {
    return this.http.get("http://localhost:8089/api/dept");
  }

  public getRegStudy(id)
  {
    return this.http.get("http://localhost:8089/api/ListStudy/{id}");
  }
    
    
  public getDepartmentById(id)
  {
    return this.http.get("http://localhost:8089/api/editStudies/{id}");
  }

}
