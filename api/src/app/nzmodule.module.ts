import { NgModule } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  exports: [
    NzModalModule,
    NzRateModule,
    NzCheckboxModule,
    NzRadioModule,
    NzTableModule,
    NzIconModule
  ]
})
export class NzmoduleModule {

}


