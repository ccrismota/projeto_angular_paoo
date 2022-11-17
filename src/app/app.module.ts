import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { HistoricoPesquisaClimaComponent } from './historico-pesquisa-clima/historico-pesquisa-clima.component';
import { PesquisarClimaCidadeComponent } from './pesquisar-clima-cidade/pesquisar-clima-cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PesquisarClimaCidadeComponent,
    HistoricoPesquisaClimaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
