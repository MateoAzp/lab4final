import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'mp-cliente-nuevoeditar',
  templateUrl: './cliente-nuevoeditar.component.html',
  styleUrls: ['./cliente-nuevoeditar.component.css']
})
export class ClienteNuevoeditarComponent implements OnInit {


  formularioCliente: FormGroup
  idDesdeUrl: string

  esClienteNuevo: boolean 
  constructor(private formB: FormBuilder, private route: ActivatedRoute,
               private router: Router, private api: ApiService) {

    this.idDesdeUrl = this.route.snapshot.paramMap.get('id');

    if(this.idDesdeUrl !== "0" && this.idDesdeUrl !== 'undefined' && this.idDesdeUrl !== null)
    {
      this.api.getCliente(this.idDesdeUrl)
        .subscribe(cliente => {
         this.crearFormulario(cliente)
         }
        )
    this.esClienteNuevo = false;
    }
    else {
      this.crearFormulario(null)
      this.esClienteNuevo = true;
    }
    

  }

  crearFormulario(cliente : Cliente){
     this.formularioCliente = this.formB.group({
      id: [cliente != null ? cliente.id : null, []],
      nombre: [cliente != null ? cliente.nombre : null, [Validators.required]],
      direccion: [cliente != null ? cliente.direccion : null, []],
      cuit: [cliente != null ? cliente.cuit : null, [Validators.required, Validators.min(1)]]
    })
  }
  ngOnInit() {
  }

  guardarCliente(){
    const clienteNuevo : Cliente= this.formularioCliente.value
    
    if(this.esClienteNuevo){
      this.api.nuevoCliente(clienteNuevo).subscribe(
      data => {
      console.log("se creo cliente")
      console.log(data)
      this.router.navigate(['clientes']);
        } 
      )
    }
    else {
      this.api.actualizarCliente(clienteNuevo).subscribe(
      data => {
      console.log("se modifico cliente")
      console.log(data)
      this.router.navigate(['clientes']);
        } 
      )
    }



  }

  get id() { return this.formularioCliente.get('id'); }
  get nombre() { return this.formularioCliente.get('nombre'); }
  get cuit() { return this.formularioCliente.get('cuit'); }
  get direccion() { return this.formularioCliente.get('direccion'); }
}
