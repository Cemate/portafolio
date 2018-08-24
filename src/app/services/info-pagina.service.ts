import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) {
    console.log('Info página inicializado');

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
        // console.log(resp['facebook']);
        console.log(resp);
      });
    // Leer el archivo Json, necesito un módulo en particular, importar en el app.module.ts el httpClientModule
    // Despues agregar el servicio http a este servicio
  }

}
