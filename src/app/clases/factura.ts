import { Cliente } from './cliente'

export class Factura {
  id: number
  tipo: string
  fecha: Date
  numero: number
  puntoDeVenta: number
  idcliente: number
  cliente: Cliente
  total: number
}
