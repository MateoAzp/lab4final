import { Cliente } from './cliente'

export class Factura {
  id: number
  tipo: string
  fecha: Date
  numero: number
  puntodeventa: number
  idcliente: number
  cliente: Cliente
  total: number
}
