import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetSearchGuard implements CanDeactivate<any> {
  canDeactivate(component: any): boolean {
    // Aquí puedes añadir la lógica para restablecer el estado de búsqueda
    // Por ejemplo, eliminar entradas específicas del sessionStorage
    sessionStorage.removeItem('busquedaGaritos');
    sessionStorage.removeItem('busquedaNoticias');
    // Añade aquí cualquier otra lógica de limpieza necesaria
    return true;
  }
}
