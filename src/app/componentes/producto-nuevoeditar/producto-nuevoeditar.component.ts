import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'mp-producto-nuevoeditar',
  templateUrl: './producto-nuevoeditar.component.html',
  styleUrls: ['./producto-nuevoeditar.component.css']
})
export class ProductoNuevoeditarComponent implements OnInit {

  formularioProducto: FormGroup
  idDesdeUrl: string

  esProductoNuevo: boolean 
  constructor(private formB: FormBuilder, private route: ActivatedRoute,
               private router: Router, private api: ApiService) {

    this.idDesdeUrl = this.route.snapshot.paramMap.get('id');

    if(this.idDesdeUrl !== "0" && this.idDesdeUrl !== 'undefined' && this.idDesdeUrl !== null)
    {
      this.api.getProducto(this.idDesdeUrl)
        .subscribe(producto => {
         this.crearFormulario(producto)
         }
        )
    this.esProductoNuevo = false;
    }
    else {
      this.crearFormulario(null)
      this.esProductoNuevo = true;
    }
    

  }

  crearFormulario(producto : Producto){
     this.formularioProducto = this.formB.group({
      id: [producto != null ? producto.id : null, []],
      codigo: [producto != null ? producto.codigo : '', [Validators.required]],
      nombre: [producto != null ? producto.nombre : null, [Validators.required]],
      descripcion: [producto != null ? producto.descripcion : null, []],
      precio: [producto != null ? producto.precio : null, [Validators.required, Validators.min(1)]]
    })
  }
  ngOnInit() {
  }

  guardarProducto(){
    const productoNuevo : Producto= this.formularioProducto.value
    if(this.esProductoNuevo){
      this.api.nuevoProducto(productoNuevo).subscribe(
      data => {
      console.log("se creo producto")
      console.log(data)
      this.router.navigate(['productos']);
        } 
      )
    }
    else {
      this.api.actualizarProducto(productoNuevo).subscribe(
      data => {
      console.log("se modifico producto")
      console.log(data)
      this.router.navigate(['productos']);
        } 
      )
    }
  }

  get id() { return this.formularioProducto.get('id'); }
  get codigo() { return this.formularioProducto.get('codigo'); }
  get nombre() { return this.formularioProducto.get('nombre'); }
  get descripcion() { return this.formularioProducto.get('descripcion'); }
  get precio() { return this.formularioProducto.get('precio'); }
}
