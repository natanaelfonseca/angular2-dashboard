import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { GreetingsPipe } from './../pipes/greetings.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    GreetingsPipe
  ],
  exports: [
    NavbarComponent,
    GreetingsPipe
  ]
})
export class NavbarModule { }
