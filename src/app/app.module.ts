import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/features/home/home.component';
import { AboutusComponent } from './modules/features/aboutus/aboutus.component';
import { ContactusComponent } from './modules/features/contactus/contactus.component';
import { FaqComponent } from './modules/features/faq/faq.component';
import { HeaderComponent } from './modules/features/header/header.component';
import { FooterComponent } from './modules/features/footer/footer.component';
import { TermsandconditionComponent } from './modules/features/termsandcondition/termsandcondition.component';
import { PrivacypolicyComponent } from './modules/features/privacypolicy/privacypolicy.component';
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KabaddiComponent } from './modules/features/kabaddi/kabaddi.component';
import { CricketComponent } from './modules/features/cricket/cricket.component';
import { FootballComponent } from './modules/features/football/football.component';
import { LegalityComponent } from './modules/features/legality/legality.component';
import { RefundComponent } from './modules/features/refund/refund.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    TermsandconditionComponent,
    PrivacypolicyComponent,
    KabaddiComponent,
    CricketComponent,
    FootballComponent,
    LegalityComponent,
    RefundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,

    
		ReactiveFormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		MatInputModule,
		BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
