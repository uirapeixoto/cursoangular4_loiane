import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';


import { CursosModule } from './cursos/cursos.module';
import { SettingsService } from './settings.service';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [
    SettingsService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
    /*{provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService => settingsService.getLocale())
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
