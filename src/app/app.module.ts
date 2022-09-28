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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
