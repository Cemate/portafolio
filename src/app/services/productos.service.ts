import { Producto } from './../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.getProductos();
   }

  private getProductos() {
    this.http.get('https://portafolio-a6fb8.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        console.log(resp);
      });
  }
}
