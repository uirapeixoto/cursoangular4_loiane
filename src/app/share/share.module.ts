import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownService } from './services/dropdown.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FormDebugComponent,
    CampoControlErrorComponent,
  ]
})
export class ShareModule { }
