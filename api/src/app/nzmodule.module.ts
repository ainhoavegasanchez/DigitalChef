
import { NgModule } from '@angular/core';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  exports: [
    NzModalModule,
    NzRateModule,
    NzCheckboxModule,
    NzRadioModule
  ]
})
export class NzmoduleModule {

}


