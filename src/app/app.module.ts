import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//se crea un servicio para cargar los scripts de javascript
import { CargarScriptsService } from './cargar-scripts.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    HabitacionComponent,
    ClientesComponent,
    MantenimientoComponent,
    TiendaComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
