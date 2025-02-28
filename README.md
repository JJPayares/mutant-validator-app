# Detector de Mutantes por ADN

Este proyecto es una aplicación en Angular que permite verificar si una secuencia de ADN pertenece a un mutante o no.

## 📌 Características
- Interfaz amigable para ingresar secuencias de ADN.
- Verificación automática de la estructura del ADN.
- Indicación clara si la secuencia pertenece a un mutante.

## 🛠️ Instalación y Ejecución

### Requisitos
- [Node.js](https://nodejs.org/) instalado.
- [Angular CLI](https://angular.io/cli) instalado globalmente.

### Instalación
```sh
npm install
```

### Ejecución
```sh
ng serve
```
Luego, abre en tu navegador: `http://localhost:4200/`

## 📖 Instrucciones de Uso
1. Ingresa una secuencia de ADN en el siguiente formato:
```
ATGCGA
ATGTGC
TTGAGT
AACCGT
GCGTCA
TCACTG
```
2. Presiona el botón **Validar ADN**.
3. La aplicación indicará si la secuencia ingresada corresponde a un **mutante** o no.

## ❌ Formato Incorrecto
Ejemplo de formato inválido:
```
ATGCTA,
CAGTGC,
TCTAGT,
AGACGT,
GCGTCA,
TCACTG

```
Este formato no incluye las comas entre líneas, lo cual lo hace inválido.

## 🔬 Lógica de Validación
El algoritmo verifica si en la matriz de ADN existen más de una secuencia de 4 letras iguales consecutivas en:
- **Horizontal**
- **Vertical**
- **Diagonales**

Si se detectan **2 o más secuencias**, el ADN pertenece a un **mutante**.

## 📂 Estructura del Proyecto
```
/src/app/
  ├── components/
  │   ├── mutant-checker.component.ts
  │   ├── mutant-checker.component.html
  │   └── mutant-checker.component.css
  ├── utils/
  │   ├── check-mutant.ts
  ├── app.module.ts
  ├── main.ts
```

## 📜 Licencia
Este proyecto es de código abierto y está bajo la licencia MIT.

