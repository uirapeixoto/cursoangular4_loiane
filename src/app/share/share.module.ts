import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  exports:[
    FormDebugComponent,
    CampoControlErrorComponent
  ]
})
export class ShareModule { }
