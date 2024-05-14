
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PortadaComponent } from '../portada/portada.component';
import { OrderService } from '../../services/order/order.service';


@Component({
    selector: 'app-inicio',
    standalone:true,
    imports:[ HeaderComponent, FooterComponent,RouterOutlet, RouterModule, PortadaComponent],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.sass', 
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioComponent implements OnInit {

    constructor(
       
    ){}
    ngOnInit(): void {
       
    }


   

}
