import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { WebsocketComponent } from './websocket/websocket.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    CadastroComponent,
    DetalhesComponent,
    CardComponent,
    WebsocketComponent
  ],
  exports: [
    DashboardComponent,
    CadastroComponent,
    DetalhesComponent
  ]
})
export class DashboardModule { }
