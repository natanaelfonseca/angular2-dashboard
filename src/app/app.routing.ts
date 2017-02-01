import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/home/dashboard.component';
import { CadastroComponent } from './dashboard/cadastro/cadastro.component';
import { DetalhesComponent } from './dashboard/detalhes/detalhes.component';
import { LoginCanActivate } from './login/login.activate';
import { LoginComponent } from './login/login.component';

export const rotas: Routes = [
    {
        path: '', component: MainComponent, canActivate: [LoginCanActivate],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'home', component: DashboardComponent },
            { path: 'cadastro', component: CadastroComponent },
            { path: 'detalhes', component: DetalhesComponent }
        ]
    },
    {
        path: 'main', component: MainComponent, canActivate: [LoginCanActivate],
        children: [
            { path: 'home', component: DashboardComponent },
            { path: 'cadastro', component: CadastroComponent },
            { path: 'detalhes/:id', component: DetalhesComponent }
        ]
    },
    { path: 'login', component: LoginComponent },

]
