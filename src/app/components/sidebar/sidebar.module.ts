import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { AppRoutingModule } from '../../rotas/app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
