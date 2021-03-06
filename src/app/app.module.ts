import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NavbarModule } from './navbar/navbar.module';
import { DashboardModule  } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { rotas } from './app.routing';
import { EditoraService } from './services/editora.service';
import { AutorService } from './services/autor.service';
import { LivroService } from './services/livro.service';
import { LivrosRESTService } from './services/livros.rest.service';
import { LoginService } from './services/login.service';
import { WebSocketService } from './services/websocket.service';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LoginCanActivate } from './login/login.activate';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    NavbarModule,
    DashboardModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot( rotas )
  ],
  providers: [ 
    LoginCanActivate,
    EditoraService,
    AutorService,
    LivroService,
    LivrosRESTService,
    LoginService,
    LivrosRESTService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }