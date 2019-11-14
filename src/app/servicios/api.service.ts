import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';
import { Cliente } from '../clases/cliente';
import { Factura } from '../clases/factura';
import { Facturaitem } from '../clases/facturaitem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:4000/api/'
  constructor(private _httpClient: HttpClient) { }

   getProductos() : Observable<Producto[]>{
    const endpoint: string = this.url + "productos/"
    return this._httpClient.get<Producto[]>(endpoint);
  } 

  getClientes() : Observable<Cliente[]>{
    const endpoint: string = this.url + "clientes/"
    return this._httpClient.get<Cliente[]>(endpoint);
  } 

  getFacturas() : Observable<Factura[]>{
    const endpoint: string = this.url + "facturas/"
    return this._httpClient.get<Factura[]>(endpoint);
  }

  getProducto(id: string) : Observable<Producto>{
    const endpoint: string = this.url + "productos/"
    return this._httpClient.get<Producto>(endpoint + id);
  } 

  getCliente(id: string) : Observable<Cliente>{
    const endpoint: string = this.url + "clientes/"
    return this._httpClient.get<Cliente>(endpoint + id);
  } 

  getFactura(id: string) : Observable<Factura>{
    const endpoint: string = this.url + "facturas/"
    return this._httpClient.get<Factura>(endpoint + id);
  }

  nuevoProducto(productoNuevo: Producto) {
   const endpoint: string = this.url + "productos/"
    return this._httpClient.post(endpoint, productoNuevo)
  }

  actualizarProducto(productoModificar: Producto) {
    const endpoint: string = this.url + "productos/"+productoModificar.id
    return this._httpClient.put(endpoint, productoModificar)
  }
  
  eliminarProducto(idProducto:number) {
    const endpoint: string = this.url + "productos/"
    //let params = new HttpParams().set("idProducto",idProducto.toString()) //Create new HttpParams
    return this._httpClient.delete(endpoint+ idProducto)
  }

  nuevoCliente(clienteNuevo: Cliente) {
   const endpoint: string = this.url + "clientes/"
    return this._httpClient.post(endpoint, clienteNuevo)
  }

  actualizarCliente(clienteModificar: Cliente) {
       const endpoint: string = this.url + "productos/"+clienteModificar.id
    return this._httpClient.put(endpoint, clienteModificar)
  }
  
  eliminarCliente(idcliente:number) {
    const endpoint: string = this.url + "clientes/"
    return this._httpClient.delete(endpoint + idcliente)
  }

  nuevaFactura(facturaNueva: Factura) {
   const endpoint: string = this.url + "facturas/"
    return this._httpClient.post(endpoint, facturaNueva)
  }
  nuevoDetalleDeFactura(itemsFactura : Facturaitem[]) {
    const endpoint: string = this.url + "facturas/"
    return this._httpClient.post(endpoint, {"itemsFactura":itemsFactura})
  }
  
  eliminarFactura(idfactura:number) {
    const endpoint: string = this.url + "facturas/"
    return this._httpClient.delete(endpoint + idfactura)
  }
}
