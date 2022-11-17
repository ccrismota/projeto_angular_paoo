import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DadosPesquisa } from '../models/dados-pesquisa';



@Injectable({
  providedIn: 'root'
})

export class PesquisaService {

  private previsoesSubject = new Subject();

  appid: string  = "d0d17f79520f1c2bc88f87ce09fc4aa4";
  url: string = "https://api.openweathermap.org/data/2.5/forecast";

  constructor(private httpClient: HttpClient) { }

   pesquisar(cidade: string): void {
   this.url = `${this.url}?q=${cidade}&lang=pt_br&appid=${this.appid}&units=metric`;
   this.httpClient.get<DadosPesquisa[]>(this.url).subscribe((resposta: any) => {
    // const icon =  resposta.list[0].weather[0].icon;
      // this.armazenarNoBanco(cidade, `http://openweathermap.org/img/wn/${icon}.png`)
    this.previsoesSubject.next(resposta);
    console.log(resposta)
   })
  }

  armazenarNoBanco(cidade: string, link: string){
    const linkOracle = "https://gf4bdab908c3019-weathercitiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/previsao/";
    this.httpClient.post(linkOracle, {cidade: cidade, data_previsao: new Date , link_previsao: link}).subscribe(res =>{
      console.log("Resposta Oracle");
      console.log(res);
    })
  }


  registrarComponente(){
    return this.previsoesSubject.asObservable();
  }
}
