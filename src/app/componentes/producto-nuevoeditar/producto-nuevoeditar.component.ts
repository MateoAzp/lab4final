import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiJsonService } from 'src/app/servicios/api-json.service';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'mp-producto-nuevoeditar',
  templateUrl: './producto-nuevoeditar.component.html',
  styleUrls: ['./producto-nuevoeditar.component.css']
})
export class ProductoNuevoeditarComponent implements OnInit {

  formularioProducto: FormGroup
  idDesdeUrl: string

  esProductoNuevo: boolean 
  constructor(private formB: FormBuilder, private route: ActivatedRoute, private apiJson: ApiJsonService) {
    this.idDesdeUrl = this.route.snapshot.paramMap.get('id');

    if(this.idDesdeUrl !== "0" && this.idDesdeUrl !== 'undefined')
    {
      this.apiJson.getProducto(this.idDesdeUrl)
        .subscribe(producto => {
         this.crearFormulario(producto)
         }
        )

    }
    else {
      this.crearFormulario(null)
    }
    this.esProductoNuevo = false;

  }

  crearFormulario(producto : Producto){
     this.formularioProducto = this.formB.group({
      id: [producto != null ? producto.id : null, []],
      codigo: [producto != null ? producto.codigo : '', [Validators.required]],
      descripcion: [producto != null ? producto.descripcion : null, [Validators.required]],
      precio: [producto != null ? producto.precio : null, [Validators.required, Validators.min(1)]]
    })

        this.formularioProducto.valueChanges.subscribe(console.table)
  }
  ngOnInit() {
  }

  guardarProducto(){
    const productoNuevo : Producto= this.formularioProducto.value
    productoNuevo.id = 27
    this.apiJson.nuevoProducto(productoNuevo).subscribe(
      data => {
      console.log("se creo producto")
      console.log(data)} 
    )
  }

  get id() { return this.formularioProducto.get('id'); }
  get codigo() { return this.formularioProducto.get('codigo'); }
  get descripcion() { return this.formularioProducto.get('descripcion'); }
  get precio() { return this.formularioProducto.get('precio'); }


}
