import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  cargadoEquipo = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    // console.log('Info página inicializado');
    this.cargarInfo();
    this.cargarEquipo();

    // Leer el archivo Json, necesito un módulo en particular, importar en el app.module.ts el httpClientModule
    // Despues agregar el servicio http a este servicio
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
        // console.log(resp['facebook']);
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http.get('https://portafolio-a6fb8.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.cargadoEquipo = true;
        this.equipo = resp;
        // console.log(resp);
        // console.log(resp['facebook']);
        // console.log(this.equipo);
      });
  }

}
