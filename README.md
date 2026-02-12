# Product Frontend

Aplicación frontend desarrollada con **Angular** que consume la API REST del backend ([Product-Backend](https://github.com/KevinnC18/Product-Backend)) para la **gestión de productos** (listar, crear, actualizar y eliminar).

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.9.

## Características

- **Listado de productos** obtenidos desde el backend.
- **Creación, edición y eliminación** de productos.
- Integración con el backend Spring Boot a través de peticiones HTTP.
- Estructura estándar de proyecto Angular (módulos, componentes y servicios).

## Requisitos previos

- **Node.js** y **npm** instalados.
- **Angular CLI** (versión 20.x o compatible):

  ```bash
  npm install -g @angular/cli
  ```

- Backend `product-backend` corriendo en `http://localhost:8080` (API en `http://localhost:8080/api/productos`).

## Configuración de la URL de la API

Normalmente la URL base de la API se configura en los archivos de entorno de Angular, por ejemplo:

```ts
// environment.ts (ejemplo)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

Asegúrate de que esta URL coincida con la del backend (`/api/productos`).

## Servidor de desarrollo

Para arrancar el servidor de desarrollo:

```bash
ng serve
```

Luego abre tu navegador en `http://localhost:4200/`.  
La aplicación se recargará automáticamente al detectar cambios en los archivos fuente.

## Construcción (build)

Para generar el build de producción:

```bash
ng build
```

Los artefactos se generarán en el directorio `dist/`.  
El build de producción viene optimizado para rendimiento.


## Flujo de ejecución del proyecto fullstack

1. **Levantar la base de datos PostgreSQL** y el backend `product-backend`:
   - Backend corriendo en `http://localhost:8080`.
2. **Arrancar este frontend** con `ng serve`:
   - Frontend disponible en `http://localhost:4200`.
3. Navegar a la aplicación y gestionar productos desde la interfaz, que se comunica con la API REST del backend.


