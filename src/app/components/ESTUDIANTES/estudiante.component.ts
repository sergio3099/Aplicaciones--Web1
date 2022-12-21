import { Component } from '@angular/core';
import estudianteJson from 'src/assets/json/estudianteJson';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})

export class esrtudianteComponent {
  estudiante: any = estudianteJson;
}
