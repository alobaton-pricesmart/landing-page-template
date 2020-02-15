import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BanerComponent } from './baner/baner.component';
import { ContactComponent } from './contact/contact.component';
import { StaffComponent } from './staff/staff.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    BanerComponent,
    ContactComponent,
    HeaderComponent,
    StaffComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
