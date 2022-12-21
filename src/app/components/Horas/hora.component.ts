import { Component } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent
{
  constructor(private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["main"]);
  }
}
