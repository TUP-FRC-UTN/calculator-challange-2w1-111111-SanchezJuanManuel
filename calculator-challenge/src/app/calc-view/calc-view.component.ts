import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalcButtonsComponent } from '../calc-buttons/calc-buttons.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcButtonsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css',
})
export class CalcViewComponent {
  num1: Number = 0;
  num2: Number = 0;
  resultado: Number = 0;

  actualizarNum1(event: any) {
    this.num1 = event.target.value;
  }

  actualizarNum2(event: any) {
    this.num2 = event.target.value;
  }

  mostrarResultado(event: Number) {
    this.resultado = event;
  }

  limpiarCampos() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }
}
