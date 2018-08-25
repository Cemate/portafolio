import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/producto-descirpcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: string;
  producto: ProductoDescripcion;
  constructor(private route: ActivatedRoute,
              private _serviceProducto: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        // console.log(parametros['id']);
        // this.id = parametros['id'];
        this._serviceProducto.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            this.producto = producto;
          });
      });
  }

}
