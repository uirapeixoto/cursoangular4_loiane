import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './../share/share.module';
import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
  ],
  declarations: [
    DataFormComponent,
  ]
})
export class DataFormModule { }
