import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-buttons',
  standalone: true,
  imports: [],
  templateUrl: './calc-buttons.component.html',
  styleUrl: './calc-buttons.component.css',
})
export class CalcButtonsComponent {
  resultado: Number = 0;
  @Input() numero1: Number = 0;
  @Input() numero2: Number = 0;
  @Output() onCalcularResultado = new EventEmitter<Number>();
  @Output() onLimpiarTodo = new EventEmitter<void>();

  sumarNumeros() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
    this.onCalcularResultado.emit(this.resultado);
  }

  restarNumeros() {
    this.resultado = Number(this.numero1) - Number(this.numero2);
    this.onCalcularResultado.emit(this.resultado);
  }

  multiplicarNumeros() {
    this.resultado = Number(this.numero1) * Number(this.numero2);
    this.onCalcularResultado.emit(this.resultado);
  }

  dividirNumeros() {
    this.resultado = Number(this.numero1) / Number(this.numero2);
    this.onCalcularResultado.emit(this.resultado);
  }

  exponenciarNumeros() {
    this.resultado = Number(this.numero1) ** Number(this.numero2);
    this.onCalcularResultado.emit(this.resultado);
  }

  limpiarNumeros() {
    this.onLimpiarTodo.emit();
  }
}
