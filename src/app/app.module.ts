import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { RecordsComponent } from './records/records.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { BookPatientComponent } from './book-patient/book-patient.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminComponent } from './admin/admin.component';
import { AdminInvestigationsComponent } from './admin-investigations/admin-investigations.component';



import { NgAlertModule } from '@theo4u/ng-alert';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PaypalComponent } from './paypal/paypal.component';

import { CommonModule } from '@angular/common';
import { BookServiceComponent } from './book-service/book-service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { PaypalMarriageComponent } from './paypal-marriage/paypal-marriage.component';
import { PaypalSpiritualComponent } from './paypal-spiritual/paypal-spiritual.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  

    NavbarComponent,
    ContactUsComponent,
  

 
    RecordsComponent,
    ScheduleComponent,
   
    BookPatientComponent,
    
    
    
  
    AdminNavComponent,
    AdminComponent,
    AdminInvestigationsComponent,
   

     PaypalComponent,
     BookServiceComponent,
     AboutUsComponent,
     FooterComponent,
     PaypalMarriageComponent,
     PaypalSpiritualComponent,
  
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ScrollingModule,
    NgbModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgAlertModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    
  ],
  entryComponents:[BookPatientComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
