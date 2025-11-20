import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../model/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCardComponent {
  @Input() producto!: Producto;
  @Output() eliminarProducto = new EventEmitter<number>();

  onEliminar(): void {
    if (this.producto.id) {
      this.eliminarProducto.emit(this.producto.id);
    }
  }
}

