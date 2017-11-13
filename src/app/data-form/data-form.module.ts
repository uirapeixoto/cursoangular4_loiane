import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule
  ],
  declarations: [
    DataFormComponent,
  ]
})
export class DataFormModule { }
