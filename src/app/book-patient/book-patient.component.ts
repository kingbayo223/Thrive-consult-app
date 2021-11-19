import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from '../book-patient-model';
import { BookPatientServiceService } from '../book-patient-service.service';
import { RegPatientServiceService } from '../reg-patient-service.service';
import { RegModel } from '../registerPatient';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-patient',
  templateUrl: './book-patient.component.html',
  styleUrls: ['./book-patient.component.css']
})
export class BookPatientComponent implements OnInit {

  bookPatient : BookModel = new BookModel("","","","","");
  registers : RegModel = new RegModel(0,"","","","",0,"",0,"","","",0,"","","","","","");
  
 message:any;

  constructor(
    private service :BookPatientServiceService,
    private register: RegPatientServiceService,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<BookPatientComponent>,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
     
  }
   

  public registerNow(){
    let response=this.service.doRegisterPatient(this. bookPatient);
    response.subscribe(data=>{
      this.message=data;
    })
  }

  resetForm(form?: NgForm) {
    if (form = null)

      form.resetForm();
    this.bookPatient = {
      pid: this.data.pid,
      fName: '',
      mName: '0',
      lName: '',
      mno: '',
    dob: '',
    age: 0,
    gender: '',
    nname: '',
    nrelat: '',
    nphn: 0,
    nadd: '',
    cat: '',
    address: '',
    street: '',
    state: '',
    country: '',
     
    };
    this.service.bookPatient = [];
  }
  
}
