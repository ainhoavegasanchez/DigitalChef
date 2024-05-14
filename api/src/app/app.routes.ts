import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ValoracionesComponent } from './components/valoraciones/valoraciones.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { PortadaComponent } from './components/portada/portada.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

export const routes: Routes = [

    { path: 'registrer', component: RegistrerComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: PortadaComponent },
    {
        path: 'inicio', component: InicioComponent, children: [
            { path: '', component: MenuComponent },
            { path: 'modals', component: ModalsComponent},
            { path: 'valoraciones', component: ValoracionesComponent },
            { path: 'perfil', component: PerfilComponent },
           
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, RouterOutlet]
})

export class AppRoutingModule { }