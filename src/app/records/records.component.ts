import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BookPatientServiceService } from '../book-patient-service.service';
import { BookPatientComponent } from '../book-patient/book-patient.component';
import { RegPatientServiceService } from '../reg-patient-service.service';
import { Router } from '@angular/router';
import {  NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BookModel } from '../book-patient-model';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AccountwaitingServiceService } from '../accountwaiting-service.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
 public page=1;
 public pageSize=5;

  registerPatients:any;
  bookPatient:any;
  registerPatient:any;
  message:any;
  sendPatients : BookModel = new BookModel("","","","","");
editForm:FormGroup;
 
 
  constructor(private service :RegPatientServiceService, 
    private bookservices:BookPatientServiceService,
    private serviced: AccountwaitingServiceService,
    private dialog:MatDialog,
    private router: Router,
    private modalService: NgbModal,
    private fb:FormBuilder,
    private formBuilder: FormBuilder,
    private http: HttpClient) {

      this.editForm= this.fb.group({
        'pid': new FormControl('', Validators.required),
        'fName': new FormControl('', Validators.required),
        'mName': new FormControl('', Validators.required),
        'lName': new FormControl('', Validators.required),
        'mno': new FormControl('', Validators.required),
        'dob': new FormControl('', Validators.required),
        'age': new FormControl('', Validators.required),
        'dept': new FormControl('', Validators.required),
    })
    }
  ngOnInit(): void {
    this.editForm=this.fb.group({
      
      pid:[''],
      fName:[''],
      mName:[''],
      lName:[''],
      dept:[''],
      from:['Reception'],
      purpose:[''],
      mno:[''],
      age:[''],
      dob:[''],
      nname:[''],
      gender:[''],
      nrelate: [''],
      nphn: [''],
      nadd:[''],
      cat: [''],
      address: [''],
      street: [''],
      state: [''],
      country: [''],
    });
    
    //this.registerPatient();
    let response=this.service.getRegPatient();
    response.subscribe(data=> this.registerPatients=data);
  }
  AddOrEditOrderItem(registerPatientIndex: any, pid: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {registerPatientIndex, pid};
    this.dialog.open(BookPatientComponent, dialogConfig)
  }
  
  openDetails(targetModal,registerPatient: BookModel){
    this.modalService.open(targetModal,{
      centered:true,
      backdrop:'static',
      size:'lg'
    });
  
    document.getElementById('pid').setAttribute('value',registerPatient.pid);
    document.getElementById('fName').setAttribute('value',registerPatient.fName);
    document.getElementById('mName').setAttribute('value',registerPatient.mName);
    document.getElementById('lName').setAttribute('value',registerPatient.lName);
    document.getElementById('dept').setAttribute('value',registerPatient.dept);
    document.getElementById('from').setAttribute('value',registerPatient.from);
    document.getElementById('mno').setAttribute('value',registerPatient.mno);
  }

  openEdit(targetModal,registerPatient: BookModel){
    this.modalService.open(targetModal,{
      centered:true,
      backdrop:'static',
      size:'lg'
    });
    this.editForm.patchValue({
     
      pid: registerPatient.pid,
      fName: registerPatient.fName,
      mName: registerPatient.mName,
      lName: registerPatient.lName,
      dept: registerPatient.dept,
   
     
    });
  }
    

  onSubmit(){
    console.log(this.editForm.value);
    this.serviced.doRegisterPatient(this.editForm.value)
    .subscribe(
      response=>console.log('seccess',response),
      error=>console.log('error!',error)
      
      
    )
  }
  
  
  openRegister(targetModal,registerPatient: BookModel){
    this.modalService.open(targetModal,{
      centered:true,
      backdrop:'static',
      size:'lg'
    });
    this.editForm.patchValue({
     
      pid: registerPatient.pid,
      fName: registerPatient.fName,
      mName: registerPatient.mName,
      lName: registerPatient.lName,
      mno: registerPatient.mno,
      dob: registerPatient.dob,
      age: registerPatient.age,
      gender: registerPatient.gender,
      nname: registerPatient.nname,
      nrelate: registerPatient.nrelate,
      nphn: registerPatient.nphn,
      nadd: registerPatient.nadd,
      cat: registerPatient.cat,
      address: registerPatient.address,
      street: registerPatient.street,
      state: registerPatient.state,
      country: registerPatient.country,
    
    
      
     
    });
  
  }
}
