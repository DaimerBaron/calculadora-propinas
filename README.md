# 💸 Calculadora de Propinas
🔗 **[Calculadora-propinas-practica](https://calculadora-propina-practice.netlify.app/)**

## 🧾 ¿De qué se trata el proyecto?

Este proyecto básico es una **calculadora de propinas y consumos para restaurantes**. Permite:

- Seleccionar productos de un menú.
- Agregarlos a una orden.
- Elegir el porcentaje de propina.
- Visualizar el total a pagar (subtotal + propina).
- Agregar y quitar productos.
- Ver resumen de la orden: subtotal, propina y total.
- Guardar la orden.

---

## 🧰 Estructura y Herramientas Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario (`src/App.tsx`, `src/main.tsx`).
- **TypeScript**: Tipado estático para mayor seguridad y mantenibilidad (`src/types/index.ts`).
- **Vite**: Herramienta de desarrollo y bundler rápido (`vite.config.ts`).
- **Tailwind CSS**: Framework de utilidades para el diseño visual (`src/index.css`).
- **ESLint**: Linter para mantener la calidad del código (`.eslintrc.cjs`).
- **Hooks personalizados**: Ej. `useOrder` para manejar el estado de la orden.
- **Componentes reutilizables**: Ej. `MenuItem`, `Order`, `OrderTotal`, `TipPorcentegeForm`.
- **Helpers**: Funciones auxiliares como `formatCurrency` para formatear precios.

---

## 📘 ¿Qué aprendí con este proyecto?

- Gestión de estado en React con **hooks personalizados**.
- Uso de **TypeScript** para robustez y claridad en los datos.
- **Componentización**: Separar lógica y UI en componentes reutilizables.
- Estilizado moderno y rápido con **Tailwind CSS**.
- Configuración de herramientas modernas como **Vite** y **ESLint**.
- Aplicación de buenas prácticas en la **organización del código**.

---

## 🗂️ Archivos y Funcionalidades Clave

- `App.tsx`: Componente principal que integra toda la lógica y la UI.
- `useOrder.tsx`: Hook personalizado para manejar la lógica de la orden.
- `OrderTotal.tsx`: Calcula y muestra el subtotal, propina y total.
- `TipPorcentegeForm.tsx`: Formulario para seleccionar el porcentaje de propina.
- `db.ts`: Datos del menú del restaurante.
- `index.ts`: Helper para formatear precios a moneda.

---

## 🧠 Resumen

Este proyecto fue una excelente oportunidad para practicar el desarrollo de una aplicación **React moderna**, usando **TypeScript**, **Tailwind CSS**, y aplicando **buenas prácticas** en cuanto a arquitectura, escalabilidad y calidad del código.

---

> ✨ ¡Ideal como base para apps más complejas de consumo o POS (Point of Sale)!

