import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './list/counter/counter.component';
import { TotalComponent } from './list/total/total.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModalsComponent } from '../modals/modals.component';
import { FormsModule } from '@angular/forms';
import { NzmoduleModule } from '../../nzmodule.module';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CounterComponent,
    TotalComponent,
    ProductComponent,
    MenuComponent,
    ListComponent
  ],
imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    ModalsComponent,
    FormsModule,
    NzmoduleModule
  ],
  exports:[
    CounterComponent,
    TotalComponent,
    ProductComponent,
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule { }
