import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegStudiesServiceService } from '../regStudies-service.service';

@Component({
  selector: 'app-admin-investigations',
  templateUrl: './admin-investigations.component.html',
  styleUrls: ['./admin-investigations.component.css']
})
export class AdminInvestigationsComponent implements OnInit {

  studies:any;
 studiesForm:FormGroup
  listData: any[];
  constructor(private fb:FormBuilder,
    private http: HttpClient,
    private services:RegStudiesServiceService,) {

    //this.listData=[];
    //this binds the data from the table to database using form control
    this.studiesForm= this.fb.group({
  
      'name': new FormControl('', Validators.required),
      'department': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
  })
    
    
   }
 public addStudies(): void{
  this.listData.push(this.studiesForm.value);
  this.studiesForm.reset();
 }
 reset(){
  this.studiesForm.reset();
 }

 removeItem(element){
  this.listData.forEach((value,index)=>{
    if(value==element)
    this.listData.splice(index,1);
  });
 }
  ngOnInit(): void {
    //this line is responsible to call data from database into table fields
    this.studiesForm=this.fb.group({
      
      name:[''],
      department:[''],
      price:['']
    });
    
    //this.registerPatient();
    let response=this.services.getRegPatient();
    response.subscribe(data=> this.studies=data);
  }
  
//this connects data to database
  onSubmit()
  {

    console.log(this.studiesForm.value);
    this.services.doRegisterPatient(this.studiesForm.value)
    .subscribe(
      response=>console.log('seccess',response),
      error=>console.log('error!',error)
      
      
    )
  
  }
  

}
