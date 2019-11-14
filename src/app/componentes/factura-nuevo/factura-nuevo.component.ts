import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/clases/factura';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { Cliente } from 'src/app/clases/cliente';
import { Facturaitem } from 'src/app/clases/facturaitem';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'mp-factura-nuevo',
  templateUrl: './factura-nuevo.component.html',
  styleUrls: ['./factura-nuevo.component.css']
})
export class FacturaNuevoComponent implements OnInit {

  formularioFactura: FormGroup
  formularioItemFactura: FormGroup

  clientesParaSeleccionar : Cliente []
  productosParaSeleccionar : Producto []
  detallesGuardados: Facturaitem []

  constructor(private formB: FormBuilder, private route: ActivatedRoute,
               private router: Router, private api: ApiService) {
      this.api.getClientes()
        .subscribe(clientes => this.clientesParaSeleccionar = clientes)

      this.api.getProductos()
        .subscribe(productos => this.productosParaSeleccionar = productos)

      this.crearFormulario()
  }

  crearFormulario(){

    this.formularioFactura = this.formB.group({
      tipo: [ null, [Validators.required]],
      numero: [ null, [Validators.required, Validators.min(1)]],
      idcliente: [ null, [Validators.required]],
      puntodeventa: [null, [Validators.required]],
      items: this.formB.array([])
    })
  }
  ngOnInit() {
  }

  guardarFactura(){

    const facturaNueva : Factura= this.formularioFactura.value
    
      this.api.nuevaFactura(facturaNueva).subscribe(
      data => {
      console.log("se creo factura")
      console.log(data)
      this.router.navigate(['facturas']);
        } 
      )

    const detalleDeFactura = this.itemsDeFactura.value
    this.api.nuevoDetalleDeFactura(detalleDeFactura as Facturaitem []).subscribe(data => console.log("se creo el detalle"))
  }

  agregarItemFormulario(){
    const itemDetalle = this.formB.group({
      idproducto: [ null, [Validators.required]],
      cantidad: [ 1, [Validators.required, Validators.min(1)]],
      precioUnitario: [null, [Validators.required, Validators.min(1)]],
      iva: [ 21, [Validators.required]],
      subtotal: [null, [Validators.required, Validators.min(1)]]
    })

    this.itemsDeFactura.push(itemDetalle)
  }


  get id() { return this.formularioFactura.get('id') }
  get tipo() { return this.formularioFactura.get('tipo') }
  get idcliente() { return this.formularioFactura.get('idcliente') }
  get numero() { return this.formularioFactura.get('numero') }
  get puntodeventa() { return this.formularioFactura.get('puntodeventa') }
  get itemsDeFactura() {return this.formularioFactura.get('items') as FormArray}
}
