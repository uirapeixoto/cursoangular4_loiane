import { NgModule } from '@angular/core';
import { ShareModule } from './../share/share.module';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
    TemplateFormComponent,
  ]
})
export class TemplateFormModule { }
