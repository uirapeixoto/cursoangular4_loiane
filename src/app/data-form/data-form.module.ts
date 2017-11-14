import { NgModule } from '@angular/core';
import { ShareModule } from './../share/share.module';
import { DataFormComponent } from './data-form.component';
import { DropdownService } from '../share/services/dropdown.service';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
    DataFormComponent
  ],
  providers:[
    DropdownService
  ]
})
export class DataFormModule { }
