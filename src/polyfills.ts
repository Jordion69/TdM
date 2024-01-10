/**
 * Este es un archivo polyfills.ts básico.
 * Puedes necesitar descomentar ciertas líneas o añadir más polyfills según los navegadores que necesitas soportar.
 */

/***************************************************************************************************
 * Zona JS es requerida por defecto para Angular.
 */
import 'zone.js/dist/zone';  // Incluido con Angular CLI.

/**
 * SOPORTE DE NAVEGADOR ESPECÍFICO
 * Ver la documentación de Angular y `core-js` para más información sobre qué importaciones podrían ser necesarias.
 */

// Para soporte de navegadores antiguos, podrías necesitar importar polyfills adicionales de `core-js`
// Ejemplo:
// import 'core-js/es/array';

/**
 * Importa solo los polyfills que necesitas para reducir el tamaño del paquete final.
 * Cada importación añadida aquí incrementará el tamaño y el tiempo de carga de tu aplicación.
 */
