import { Producto } from './producto'
import { Factura } from './factura'

export class Facturaitem {
  id: number
  factura: Factura
  idFactura: number
  cantidad: number
  codigo: string
  descripcion: string
  precioUnitario: number
  iva: number
  producto: Producto
  idProducto: number

  subtotal(){
    return this.cantidad * (this.precioUnitario + this.iva)
  }

}
