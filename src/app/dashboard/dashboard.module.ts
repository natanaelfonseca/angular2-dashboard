import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    CadastroComponent,
    DetalhesComponent,
    CardComponent
  ],
  exports: [
    DashboardComponent,
    CadastroComponent,
    DetalhesComponent
  ]
})
export class DashboardModule { }
