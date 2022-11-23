import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DadosPesquisa } from '../models/dados-pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

@Component({
  selector: 'app-pesquisar-clima-cidade',
  templateUrl: './pesquisar-clima-cidade.component.html',
  styleUrls: ['./pesquisar-clima-cidade.component.css']
})

export class PesquisarClimaCidadeComponent implements OnInit {


  cidade: string;
  valor: string;

  constructor(
    private pesquisaService: PesquisaService
  ) { }

  previsoes: DadosPesquisa[];


  pesquisarTemperaturaCidade() {
    this.pesquisaService.pesquisar(this.cidade);
    this.limparPesquisa();
  }

  limparPesquisa() {
    this.valor = this.cidade;
    this.cidade = '';
  }


  ngOnInit(): void {
    this.pesquisaService.registrarComponente().subscribe((previsoes: any) => {
      this.previsoes = previsoes.list;
    });
  }
}
