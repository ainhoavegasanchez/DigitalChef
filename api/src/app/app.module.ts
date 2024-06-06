import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NzmoduleModule } from './nzmodule.module';
import { provideClientHydration } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule, NzmoduleModule
  ],
   exports:[ AppRoutingModule, FormsModule, HttpClientModule, NzmoduleModule],
   providers:[provideClientHydration()]
})
export class AppModule { }
