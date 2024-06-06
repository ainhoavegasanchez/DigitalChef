import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ValoracionesComponent } from './components/valoraciones/valoraciones.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { PortadaComponent } from './components/portada/portada.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ListComponent } from './components/menu/list/list.component';
import { NoFound404Component } from './components/404/404.component';

export const routes: Routes = [
    { path: 'portada', component: PortadaComponent },

    { path: 'registrer', component: RegistrerComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: PortadaComponent },
    {
        path: 'inicio', component: InicioComponent, children: [
            { path: '', component: MenuComponent },
            { path: 'modals', component: ModalsComponent },
            { path: 'perfil', component: PerfilComponent },
            { path: 'list', component: ListComponent },
        ]
    },
    { path: 'valoraciones', component: ValoracionesComponent },
    { path: '**', component: NoFound404Component }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, RouterOutlet]
})

export class AppRoutingModule { }
