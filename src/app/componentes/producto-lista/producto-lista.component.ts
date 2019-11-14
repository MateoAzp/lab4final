import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'mp-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos: Producto[]
  constructor(private api: ApiService) {
    this.api.getProductos().subscribe(data => this.productos = data)
   }

  ngOnInit() {
  }
  
  borrarProducto(id: number){
    this.api.eliminarProducto(id).subscribe()
  }

}
