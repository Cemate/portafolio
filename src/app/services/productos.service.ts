import { Producto } from './../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  cargando = true;
  producto: any;

  constructor(private http: HttpClient) {
    this.getProductos();
   }

  private getProductos() {
    return new Promise(( resolve, reject) => {
      this.http.get('https://portafolio-a6fb8.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://portafolio-a6fb8.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string) {

    if ( this.productos.length === 0) {
      // cargar productos
      this.getProductos().then(() => {
        // despues de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string) {
    console.log(this.productos);
    this.productosFiltrados = [];

    termino = termino.toLowerCase();
    this.productos.forEach( prod => {

      if (prod.categoria.toLowerCase().indexOf( termino) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0 ) {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
