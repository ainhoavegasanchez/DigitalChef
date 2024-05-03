import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { InicioModule } from './components/inicio/inicio.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, InicioModule, HttpClientModule
  ],
   exports:[InicioModule, AppRoutingModule, FormsModule, HttpClientModule]
})
export class AppModule { }
