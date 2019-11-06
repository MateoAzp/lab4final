import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../clases/producto';
import { Cliente } from '../clases/cliente';
import { Factura } from '../clases/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {

  url: string = 'http://localhost:3000/'
  constructor(private _httpClient: HttpClient) {

   }

  getProductos() : Observable<Producto[]>{
    const endpoint: string = this.url + "producto/"
    return this._httpClient.get<Producto[]>(endpoint);
  } 

  getClientes() : Observable<Cliente[]>{
    const endpoint: string = this.url + "cliente/"
    return this._httpClient.get<Cliente[]>(endpoint);
  } 

  getFacturas() : Observable<Factura[]>{
    const endpoint: string = this.url + "factura/"
    return this._httpClient.get<Factura[]>(endpoint);
  }

  getProducto(id: string) : Observable<Producto>{
    const endpoint: string = this.url + "producto/"
    return this._httpClient.get<Producto>(endpoint + id);
  } 

  getCliente(id: string) : Observable<Cliente>{
    const endpoint: string = this.url + "cliente/"
    return this._httpClient.get<Cliente>(endpoint + id);
  } 

  getFactura(id: string) : Observable<Factura>{
    const endpoint: string = this.url + "factura/"
    return this._httpClient.get<Factura>(endpoint + id);
  }

  nuevoProducto(productoNuevo: Producto) {
   const endpoint: string = this.url + "producto/"
    return this._httpClient.post(endpoint, productoNuevo)
  }

  actualizarProducto(productoModificar: Producto) {
    const endpoint: string = this.url + "producto/"+productoModificar.id
    return this._httpClient.put(endpoint, productoModificar)
  }
  
  eliminarProducto(idproducto:number) {
    const endpoint: string = this.url + "producto/"
    return this._httpClient.delete(endpoint + idproducto)
  }

  nuevoCliente(clienteNuevo: Cliente) {
   const endpoint: string = this.url + "cliente/"
    return this._httpClient.post(endpoint, clienteNuevo)
  }

  actualizarCliente(clienteModificar: Cliente) {
       const endpoint: string = this.url + "producto/"+clienteModificar.id
    return this._httpClient.put(endpoint, clienteModificar)
  }
  
  eliminarCliente(idcliente:number) {
    const endpoint: string = this.url + "cliente/"
    return this._httpClient.delete(endpoint + idcliente)
  }

  nuevaFactura(facturaNueva: Factura) {
   const endpoint: string = this.url + "factura/"
    return this._httpClient.post(endpoint, facturaNueva)
  }
  
  eliminarFactura(idfactura:number) {
    const endpoint: string = this.url + "factura/"
    return this._httpClient.delete(endpoint + idfactura)
  }

}
