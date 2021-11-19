import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentServiceService } from '../appointment-service.service';
import { ContactFormRequestServiceService } from '../contact-form-request-service.service';
import { RegStudiesServiceService } from '../regStudies-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  alert:boolean=false
  constructor(
    private modalService: NgbModal,
    private fbs:FormBuilder,
       private serve : ContactFormRequestServiceService,
    private served: RegStudiesServiceService, 
    private formBuilder: FormBuilder,
     private http: HttpClient,
     private router: Router

  ) { }
  public addmore: FormGroup;
  submitted = false;
  ngOnInit(): void {

    this.addmore= this.fbs.group({
      fName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('webport360@gmail.com', Validators.required),
      country: new FormControl('', Validators.required),
      contactemail: new FormControl('', Validators.compose([
       Validators.required,
       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
     ])),
      service: new FormControl('', Validators.required),
          
                })
  }


 onSender(){
  console.log(this.addmore.value);
  this.serve.doSender(this.addmore.value)
    .subscribe(
    response=>console.log('seccess',response),
    error=>console.log('error!',error)
    
    
  );

  this.alert=true  
  this.addmore.reset({})
  }
  closeAlert()
{
this.alert=false
}

clear(){
this.addmore.reset({})
} 
}

 
  


  


