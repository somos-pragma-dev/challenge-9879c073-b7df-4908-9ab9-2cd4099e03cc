# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Formularios dinamicos con React Hooks y validacion custom

### Reto
- Tema: React Hooks
- Seniority: junior-l1
- Tipo: practical
- Título: Implementación de Formularios Dinámicos con Validación Personalizada
- Tiempo estimado: 3 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del Entorno — objetivo: Configurar el entorno de desarrollo para trabajar con React y crear la estructura básica del formulario. — entregable (NO resolver): Proyecto React configurado con componentes básicos del formulario.
- Fase 2: Implementación de la Validación Personalizada — objetivo: Implementar la lógica de validación personalizada para cada tipo de campo en el formulario. — entregable (NO resolver): Formulario con validación personalizada implementada y mensajes de error visibles.
- Fase 3: Integración y Pruebas — objetivo: Integrar todos los componentes del formulario y realizar pruebas para asegurar que la validación funcione correctamente. — entregable (NO resolver): Formulario completo con validación personalizada y pruebas realizadas.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{"name": "dynamic-form-validation", "version": "1.0.0", "main": "index.js", "scripts": {"start": "react-scripts start", "build": "react-scripts build", "test": "jest"}, "dependencies": {"react": "18.2", "react-dom": "18.2"}, "devDependencies": {"jest": "29.0"}}
// === ARCHIVO: src/components/CampoTexto.js ===
import React, { useState } from 'react';
import { validateText } from '../validation/validator';

const CampoTexto = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const validationResult = validateText(inputValue);
    setError(validationResult.error);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CampoTexto;
// === ARCHIVO: src/components/CampoNumero.js ===
import React, { useState } from 'react';
import { validateNumber } from '../validation/validator';

const CampoNumero = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const validationResult = validateNumber(inputValue);
    setError(validationResult.error);
  };

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CampoNumero;
// === ARCHIVO: src/components/CampoFecha.js ===
import React, { useState } from 'react';
import { validateDate } from '../validation/validator';

const CampoFecha = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const validationResult = validateDate(inputValue);
    setError(validationResult.error);
  };

  return (
    <div>
      <input type="date" value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CampoFecha;
// === ARCHIVO: src/validation/validator.js ===
export const validateText = (value) => {
  if (value.length < 3) {
    return { error: 'El texto debe tener al menos 3 caracteres' };
  }
  return { error: '' };
};

export const validateNumber = (value) => {
  if (isNaN(value) || value < 0) {
    return { error: 'El número debe ser positivo' };
  }
  return { error: '' };
};

export const validateDate = (value) => {
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return { error: 'La fecha es inválida' };
  }
  return { error: '' };
};
// === ARCHIVO: src/tests/CampoTexto.test.js ===
import { validateText } from '../validation/validator';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CampoTexto from '../components/CampoTexto';

test('valida texto correctamente', () => {
  render(<CampoTexto />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'ab' } });
  expect(screen.getByText('El texto debe tener al menos 3 caracteres')).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(screen.queryByText('El texto debe tener al menos 3 caracteres')).not.toBeInTheDocument();
});

test('valida texto vacío', () => {
  expect(validateText('').error).toBe('El texto debe tener al menos 3 caracteres');
});
// === ARCHIVO: src/tests/CampoNumero.test.js ===
import { validateNumber } from '../validation/validator';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CampoNumero from '../components/CampoNumero';

test('valida número correctamente', () => {
  render(<CampoNumero />);
  const input = screen.getByRole('spinbutton');
  fireEvent.change(input, { target: { value: '-1' } });
  expect(screen.getByText('El número debe ser positivo')).toBeInTheDocument();
  fireEvent.change(input, { target: { value: '1' } });
  expect(screen.queryByText('El número debe ser positivo')).not.toBeInTheDocument();
});

test('valida número no numérico', () => {
  expect(validateNumber('abc').error).toBe('El número debe ser positivo');
});
// === ARCHIVO: src/tests/CampoFecha.test.js ===
import { validateDate } from '../validation/validator';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CampoFecha from '../components/CampoFecha';

test('valida fecha correctamente', () => {
  render(<CampoFecha />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(screen.getByText('La fecha es inválida')).toBeInTheDocument();
  fireEvent.change(input, { target: { value: '2023-10-10' } });
  expect(screen.queryByText('La fecha es inválida')).not.toBeInTheDocument();
});

test('valida fecha inválida', () => {
  expect(validateDate('abc').error).toBe('La fecha es inválida');
});
```
