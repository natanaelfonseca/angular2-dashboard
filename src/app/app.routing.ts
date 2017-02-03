import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/home/dashboard.component';
import { CadastroComponent } from './dashboard/cadastro/cadastro.component';
import { DetalhesComponent } from './dashboard/detalhes/detalhes.component';
import { WebsocketComponent } from './dashboard/websocket/websocket.component';
import { LoginCanActivate } from './login/login.activate';
import { LoginComponent } from './login/login.component';

export const rotas: Routes = [
    {
        path: '', redirectTo: "/main/home", pathMatch: 'full',
    },
    {
        path: 'main', component: MainComponent, canActivate: [LoginCanActivate],
        children: [
            { path: 'home', component: DashboardComponent },
            { path: 'cadastro', component: CadastroComponent },
            { path: 'websocket', component: WebsocketComponent },
            { path: 'detalhes/:id', component: DetalhesComponent }
        ]
    },
    { path: 'login', component: LoginComponent },

]
