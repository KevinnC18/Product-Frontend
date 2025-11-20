import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/producto';
import { ProductoCardComponent } from '../producto-card/producto-card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, ProductoCardComponent],
  templateUrl: './producto-list.html',
  styleUrl: './producto-list.css'
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (products) => {
        this.productos = products;
      },
      error: () => {
        console.error("Ocurrio un error al consultar los productos")
      }
    });
  }

  crearProducto(): void {
    this.router.navigateByUrl('/nuevo');
  }

  onEliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productoService.deleteProducto(id)
        .subscribe({
          next: () => {
            this.productos = this.productos.filter(p => p.id !== id);
          },
          error: () => {
            console.error("Ocurrió un error al eliminar el producto");
            alert("No se pudo eliminar el producto. Por favor, intenta nuevamente.");
          }
        });
    }
  }
}

