import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DadosPesquisa } from '../models/dados-pesquisa';
import { HistoricoDaPesquisa } from '../models/historico-da_pesquisa';


@Injectable({
  providedIn: 'root'
})

export class PesquisaService {

  private previsoesSubject = new Subject();
  private registroSubject = new Subject();

  appid: string = "d0d17f79520f1c2bc88f87ce09fc4aa4";
  url: string = "https://api.openweathermap.org/data/2.5/forecast";


  constructor(private httpClient: HttpClient) { }

  pesquisar(cidade: string): void {
    this.url = `${this.url}?q=${cidade}&appid=${this.appid}&units=metric&lang=pt_br`;
    this.httpClient.get<DadosPesquisa[]>(this.url).subscribe((resposta: any) => {
      const icon = resposta.list[0].weather[0].icon;
      this.armazenarNoBanco(cidade, `https://openweathermap.org/img/wn/${icon}.png`);
      this.previsoesSubject.next(resposta);
      this.getHistorico();
      console.log("meu pesquisar", resposta)
    });
  }

  armazenarNoBanco(cidade: string, link: string) {
    const linkOracle = "https://gf4bdab908c3019-weathercitiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/previsao/";
    this.httpClient.post(linkOracle, { cidade: cidade, clima: link, data_previsao: new Date() }).subscribe(res => {
      console.log("Post no Oracle");
      console.log(res);
    });
  }

  getHistorico() {
    const linkOracle = "https://gf4bdab908c3019-weathercitiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/previsao/";
    this.httpClient.get<HistoricoDaPesquisa[]>(linkOracle).subscribe((resp: any) => {
      this.registroSubject.next(resp);
      console.log("meu get banco", resp)
    })
  }


  registrarComponente() {
    return this.previsoesSubject.asObservable();
  }

  registrarHistorico() {
    return this.registroSubject.asObservable();
  }
}
