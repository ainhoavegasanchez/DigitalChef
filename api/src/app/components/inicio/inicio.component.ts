
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PortadaComponent } from '../portada/portada.component';
import { OrderService } from '../../services/order/order.service';
import { MenuModule } from '../menu/menu.module';


@Component({
    selector: 'app-inicio',
    standalone:true,
    imports:[ HeaderComponent,RouterOutlet, RouterModule, PortadaComponent, MenuModule],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss', 
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioComponent {

}
