import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public _serviceProductos: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params['termino']);
        this._serviceProductos.buscarProducto(params['termino']);
      });
  }

}
