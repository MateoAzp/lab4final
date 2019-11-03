import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoNuevoeditarComponent } from './componentes/producto-nuevoeditar/producto-nuevoeditar.component';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';


const routes: Routes = [
    {
      path: 'productos', component:ProductoListaComponent,
      children: [{ path: ':id', component: ProductoNuevoeditarComponent }] 
    },
    { path: '**', component: ProductoNuevoeditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
