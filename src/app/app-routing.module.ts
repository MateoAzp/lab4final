import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoNuevoeditarComponent } from './componentes/producto-nuevoeditar/producto-nuevoeditar.component';


const routes: Routes = [
    { path: '**', component: ProductoNuevoeditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
