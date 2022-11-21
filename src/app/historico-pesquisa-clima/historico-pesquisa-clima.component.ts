import { Component, OnInit } from '@angular/core';
import { HistoricoDaPesquisa } from '../models/historico-da_pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

@Component({
  selector: 'app-historico-pesquisa-clima',
  templateUrl: './historico-pesquisa-clima.component.html',
  styleUrls: ['./historico-pesquisa-clima.component.css']
})
export class HistoricoPesquisaClimaComponent implements OnInit {

  constructor(
    private pesquisaService: PesquisaService
  ) { }



  historico: HistoricoDaPesquisa[];



  ngOnInit(): void {
    this.pesquisaService.registrarHistorico().subscribe((historico: any) =>{
      this.historico = historico.items;
    })
  }

}
