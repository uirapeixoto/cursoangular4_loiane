import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShareModule } from './../share/share.module';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ShareModule
  ],
  declarations: [
    TemplateFormComponent,
  ]
})
export class TemplateFormModule { }
