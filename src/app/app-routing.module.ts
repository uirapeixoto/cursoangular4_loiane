import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'templateForm,' },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  { path: '**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
