import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DadosPesquisa } from '../models/dados-pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

@Component({
  selector: 'app-pesquisar-clima-cidade',
  templateUrl: './pesquisar-clima-cidade.component.html',
  styleUrls: ['./pesquisar-clima-cidade.component.css']
})
export class PesquisarClimaCidadeComponent implements OnInit{

  cidade: string;

  icon: string = " ";

  link: string  = `https://openweathermap.org/img/wn/${this.icon}.png`;






  constructor(
    private pesquisaService: PesquisaService
  ) { }

  previsoes: DadosPesquisa[];


    pesquisarTemperaturaCidade(){
      this.pesquisaService.pesquisar(this.cidade);
    }


    gravarPesquisa(){
      this.pesquisaService.armazenarNoBanco(this.cidade, this.link);
    }




    ngOnInit(): void {
      this.pesquisaService.registrarComponente().subscribe((previsoes: any) => {
        this.previsoes = previsoes.list;
      });
    }
}
