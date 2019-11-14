import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoNuevoeditarComponent } from './componentes/producto-nuevoeditar/producto-nuevoeditar.component';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';
import { ClienteListaComponent } from './componentes/cliente-lista/cliente-lista.component';
import { ClienteNuevoeditarComponent } from './componentes/cliente-nuevoeditar/cliente-nuevoeditar.component';
import { FacturaListaComponent } from './componentes/factura-lista/factura-lista.component';
import { FacturaNuevoComponent } from './componentes/factura-nuevo/factura-nuevo.component';


const routes: Routes = [
    {
      path: 'productos', component:ProductoListaComponent },
      {path: 'productos/:id', component: ProductoNuevoeditarComponent, pathMatch:'full' 
      //children: [{ path: ':id', }] 
    },
    {
      path: 'clientes', component:ClienteListaComponent },
      {path: 'clientes/:id', component: ClienteNuevoeditarComponent, pathMatch:'full' 
      //children: [{ path: ':id', }] 
    },
    {
      path: 'facturas', component:FacturaListaComponent },
      {path: 'facturas/nueva', component: FacturaNuevoComponent, pathMatch:'full' 
      //children: [{ path: ':id', }] 
    },
    { path: '**', component: ProductoNuevoeditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
