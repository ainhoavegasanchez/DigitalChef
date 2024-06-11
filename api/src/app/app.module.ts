import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NzmoduleModule } from './nzmodule.module';
import { provideClientHydration } from '@angular/platform-browser';
import { MenuModule } from './components/menu/menu.module';
import { NzModalService } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NzmoduleModule,
    MenuModule
  ],
  exports:
    [AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NzmoduleModule,
      MenuModule],
  providers: [
    provideClientHydration(),
    NzModalService]
})
export class AppModule { }
