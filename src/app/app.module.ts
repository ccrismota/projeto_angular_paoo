import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HistoricoPesquisaClimaComponent } from './historico-pesquisa-clima/historico-pesquisa-clima.component';
import { PesquisarClimaCidadeComponent } from './pesquisar-clima-cidade/pesquisar-clima-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisarClimaCidadeComponent,
    HistoricoPesquisaClimaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
