# Conversor de Unidades + Calculador de Incertidumbre – Frontend

Este proyecto es una aplicación web desarrollada en Angular que permite:

1. **Convertir unidades físicas** de distintas magnitudes (longitud, masa, temperatura, etc.)
2. **Calcular incertidumbre compuesta** en mediciones físicas utilizando patrones de medida

Fue desarrollado como proyecto personal en 2022, integrando Angular 8 en frontend y Laravel en backend. A pesar de estar construido con versiones anteriores, refleja una arquitectura clara orientada a componentes y la integración de lógica científica aplicada.

> Actualmente estoy trabajando con Angular moderno y Spring Boot, pero mantengo este proyecto como muestra de mis primeras aplicaciones con lógica real aplicada a la metrología y la física en la cual comencé i trayectoria profesional.

---

## Tecnologías utilizadas

- **Angular 8**
- **TypeScript**
- **Bootstrap 4**
- **API REST** (Laravel backend)

---

## Funcionalidades principales

- Conversión de unidades entre distintas magnitudes físicas:
  - Longitud
  - Masa
  - Tiempo
  - Temperatura
  - Presión
  - Volumen
  - Etc.
- Cálculo de incertidumbre compuesta a partir de patrones de medida
- Interfaz intuitiva y responsiva
- Separación por componentes
- Consumo de APIs para mantener lógica desacoplada

---

## Estructura del proyecto

- `src/app/` – contiene componentes como:
  - `home` – vista principal del conversor
  - `header` – barra de navegación
- `services/conversor.service.ts` – lógica de consumo de la API
- `app-routing.module.ts` – define navegación
- Uso de interfaces y clases para mantener estructura clara

---

1. Clona el repositorio:
`git clone https://github.com/oscar-co/conversorFrontend`
`cd conversorFrontend`

2. Instala las dependencias:
`npm install`

3. Instala Angular CLI 8 si no la tienes:
`npm install @angular/cli@8.3.29`

4. Levanta el servidor de desarrollo:
`npx ng serve`

5. Accede desde el navegador a http://localhost:4200


## Motivación
Este proyecto nació de mi interés por la metrología y el control de calidad en entornos técnicos en el cual estuve trabajando varios años. Lo utilicé para aplicar conceptos como:

Incertidumbre en patrones de medida

Conversión entre unidades físicas

Integración frontend-backend con lógica desacoplada
