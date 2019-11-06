import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';
import { ProductoNuevoeditarComponent } from './componentes/producto-nuevoeditar/producto-nuevoeditar.component';
import { ClienteListaComponent } from './componentes/cliente-lista/cliente-lista.component';
import { ClienteNuevoeditarComponent } from './componentes/cliente-nuevoeditar/cliente-nuevoeditar.component';
import { FacturaListaComponent } from './componentes/factura-lista/factura-lista.component';
import { FacturaNuevoComponent } from './componentes/factura-nuevo/factura-nuevo.component';
import { ApiService } from './servicios/api.service';
import { ApiJsonService } from './servicios/api-json.service';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    ProductoNuevoeditarComponent,
    ClienteListaComponent,
    ClienteNuevoeditarComponent,
    FacturaListaComponent,
    FacturaNuevoComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiService, ApiJsonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
