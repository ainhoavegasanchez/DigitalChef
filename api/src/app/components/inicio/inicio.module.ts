import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { AppRoutingModule } from '../../app.routes';



@NgModule({
    declarations: [],
    exports: [InicioComponent, AppRoutingModule],
    imports: [
        CommonModule, 
        InicioComponent
    ]

})
export class InicioModule { }
