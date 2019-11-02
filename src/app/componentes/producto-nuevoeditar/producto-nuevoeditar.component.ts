import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mp-producto-nuevoeditar',
  templateUrl: './producto-nuevoeditar.component.html',
  styleUrls: ['./producto-nuevoeditar.component.css']
})
export class ProductoNuevoeditarComponent implements OnInit {

  formularioProducto: FormGroup

  constructor(private formB: FormBuilder) { }

  ngOnInit() {
    this.formularioProducto = this.formB.group({
      id: [null, []],
      codigo: ['', [Validators.required]],
      descripcion: [null, [Validators.required]],
      precio: [null, [Validators.required, Validators.min(1)]]
    })

    this.formularioProducto.valueChanges.subscribe(console.table)
  }

  get codigo() { return this.formularioProducto.get('codigo'); }
}
