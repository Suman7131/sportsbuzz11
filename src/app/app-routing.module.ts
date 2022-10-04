import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/features/home/home.component';
import { AboutusComponent } from './modules/features/aboutus/aboutus.component';
import { ContactusComponent } from './modules/features/contactus/contactus.component';
import { FaqComponent } from './modules/features/faq/faq.component';
import { TermsandconditionComponent } from './modules/features/termsandcondition/termsandcondition.component';
import { PrivacypolicyComponent } from './modules/features/privacypolicy/privacypolicy.component';
import { KabaddiComponent } from './modules/features/kabaddi/kabaddi.component';


const routes: Routes = [
                          { path: '', redirectTo: '/home', pathMatch: 'full' },
                          { path : 'home', component: HomeComponent},
                          {path : 'aboutus', component: AboutusComponent},
                          {path : 'contactus', component: ContactusComponent},
                          {path : 'faq', component: FaqComponent},
                          {path : 'termsandcondition', component: TermsandconditionComponent},
                          {path : 'privacypolicy', component: PrivacypolicyComponent},
                          {path: 'kabaddi', component:KabaddiComponent},

                       ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
