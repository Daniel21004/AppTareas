import { Component, OnInit } from '@angular/core';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Tarea } from 'src/app/models/Tarea';



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareaList: Tarea[] = [];
  tareasCompletadasList: Tarea[] = [];

  nombreTareaTemp: String = '';

  faCircle = faCircle;
  faCircleCheck = faCircleCheck;

  constructor() {
  }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    if (this.nombreTareaTemp.trim().length == 0) {
      alert("La tarea esta vacia")
    }
    else if (this.nombreTareaTemp.trim().length >= 300) {
      alert("La tarea supera los 300 carácteres")
    } else {
      this.tareaList.push(new Tarea(this.nombreTareaTemp, false));
      this.nombreTareaTemp = '';
    }
  }

  eliminarTarea(index: number, tarea: Tarea): void {
    if (tarea.estado == false) {
      this.tareaList.splice(index, 1);
    } else {
      this.tareasCompletadasList.splice(index, 1);
    }
  }

  cambiarEstado(index: number, tarea: Tarea): void {
    if (tarea.estado == false) {
      this.tareaList.splice(index, 1);
      this.tareasCompletadasList.push(tarea);
    } else {
      this.tareasCompletadasList.splice(index, 1);
      this.tareaList.push(tarea);
    }
    tarea.estado = !tarea.estado;
  }

}
