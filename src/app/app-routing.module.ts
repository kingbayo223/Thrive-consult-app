import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';


import { BookPatientComponent } from './book-patient/book-patient.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home/home.component';



import { RecordsComponent } from './records/records.component';

import { ScheduleComponent } from './schedule/schedule.component';


import { AdminComponent } from './admin/admin.component';

import { AdminInvestigationsComponent } from './admin-investigations/admin-investigations.component';




import { PaypalComponent } from './paypal/paypal.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaypalSpiritualComponent } from './paypal-spiritual/paypal-spiritual.component';
import { PaypalMarriageComponent } from './paypal-marriage/paypal-marriage.component';






const routes: Routes = [
  
  {path: '', component:HomeComponent},


  {path: 'contact-us', component:ContactUsComponent},
   {path: 'records', component:RecordsComponent},
  
  {path: 'schedule', component:ScheduleComponent},
  
   {path: 'book-patient', component:BookPatientComponent},
   {path: 'admin', component:AdminComponent},
  
 
  {path: 'admin-investigations', component:AdminInvestigationsComponent},

 

 {path: 'paypal', component:PaypalComponent},

 {path: 'book-service', component:BookServiceComponent},
 {path: 'about-us', component:AboutUsComponent},
 {path: 'paypal-spiritual', component:PaypalSpiritualComponent},
 {path: 'paypal-marriage', component:PaypalMarriageComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
