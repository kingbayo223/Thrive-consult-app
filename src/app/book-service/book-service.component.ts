import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../appointment';
import { AppointmentServiceService } from '../appointment-service.service';
import { BookModel } from '../book-patient-model';
import { RegStudies } from '../regStudies';
import { RegStudiesServiceService } from '../regStudies-service.service';
declare var $: any;
@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {
  alert:boolean=false
  private formSumitAttempt: boolean;
  depa:Appointment[];
  depas:RegStudies[];
 registerPatient:any;

 proSelected:any={};
 modifedtext: string;

  dataset: Appointment = {
    fName:'',
    mName:'',
    lName:'',
    phone:0,
    email:'',
    date:'',
    amount:0,
    service:'',
    link:'',
    
  };
  studiesList;
  apppointment : Appointment = new Appointment("","","",0,"","",0,"","");
 
  message:any;
  //amount: RegStudies[];

 
  constructor(private modalService: NgbModal,
    private fbs:FormBuilder,
       private serve : AppointmentServiceService,
    private served: RegStudiesServiceService, 
    private formBuilder: FormBuilder,
     private http: HttpClient,
     private router: Router) {
     
   }
   
   public addmore: FormGroup;
   submitted = false;

  ngOnInit(): void { 
    //this.depas=[
      // {id:1,amount:1.00,productName:"Listening"},
      //{id:2,amount:2.00,productName:"Marriage Counselling"},
      //{id:3,amount:3.00,productName:"Spiritual Listening"},
    //];
    
    
    
    
    //getting data from database
        //this.served.getProduces().subscribe(res=> this.depas= res as RegStudies[] );
     
        //this.deps.findAllDepartments().subscribe(res=> this.depa= res as Departments[] );
        this.addmore= this.fbs.group({
          fName: new FormControl('', Validators.required),
          mName: new FormControl('', Validators.required),
          lName: new FormControl('', Validators.required),
          phone: new FormControl('', Validators.required),
          email: new FormControl('', Validators.compose([
           Validators.required,
           Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
         ])),
          date: new FormControl('', Validators.required),
          service: new FormControl('', Validators.required),
          amount: new FormControl('', Validators.required),
          link: new FormControl('', Validators.required),
          
                    })
      }
    
    
    
    
    
    
     //for Listening
     openEdits(targetModal,registerPatient: BookModel){
      this.modalService.open(targetModal,{
        centered:true,
        backdrop:'static',
        size:'lg'
      });
      this.addmore.patchValue({
        
        
        service:'Listening',
          amount:100.00,
          link:'locahost'
           
      });
     }
    
    //For Spiritual Listening
    openEdited(targetModal,registerPatient: BookModel){
      this.modalService.open(targetModal,{
        centered:true,
        backdrop:'static',
        size:'lg'
      });
      this.addmore.patchValue({
        
        service:'Spiritual Listening',
        amount:200.00,
        link:'locahost'
        
    });
     }
    
    
    //For Marriage Counselling
    
    openEdit(targetModal,registerPatient: BookModel){
      this.modalService.open(targetModal,{
        centered:true,
        backdrop:'static',
        size:'lg'
      });
      this.addmore.patchValue({
        
        
        service:'Marriage Counselling',
        amount:200.00,
        link:'locahost'
    
      
     
    });
     }
     
     onSender(){
      console.log(this.addmore.value);
      this.serve.doSender(this.addmore.value)
        .subscribe(
        response=>console.log('seccess',response),
        error=>console.log('error!',error)
        
        
      );}
    
     
    
     
     onSubmit(){
          
      this.serve.doAppointment(this.addmore.value).subscribe(response=>console.log('seccess',response),
      
        error=>console.log('error!',error)
      
        )
      
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

  


