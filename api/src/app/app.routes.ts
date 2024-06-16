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
import { AuthGuard } from './services/AuthGuard.servcice';
import { CocinaComponent } from './components/cocina/cocina.component';
import { KitchenAuthService } from './components/cocina/KitcheAuth.service';
import { MenuModule } from './components/menu/menu.module';

export const routes: Routes = [
    
    { path: 'registrer', component: RegistrerComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: PortadaComponent },
    {
        path: 'inicio', component: InicioComponent, canActivate: [AuthGuard], children: [
            { path: '', component: MenuComponent },
            { path: 'modals', component: ModalsComponent },
            { path: 'perfil', component: PerfilComponent,  canActivate: [AuthGuard] },
            { path: '**', component: NoFound404Component },
            { path: 'list', component: ListComponent },
        ]
    },
    { path: 'cocina', component: CocinaComponent,canActivate: [KitchenAuthService] },
    { path: 'valoraciones', component: ValoracionesComponent,canActivate: [AuthGuard] },
    { path: '**', component: NoFound404Component }

];

@NgModule({
    imports: [RouterModule.forRoot(routes), MenuModule],
    exports: [RouterModule, RouterOutlet]
})

export class AppRoutingModule { }
