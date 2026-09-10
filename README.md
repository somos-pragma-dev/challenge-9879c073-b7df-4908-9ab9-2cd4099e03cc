# Implementación de Formularios Dinámicos con Validación Personalizada

El objetivo es construir un formulario dinámico en React que permita la validación personalizada de los campos. El formulario debe manejar diferentes tipos de campos (texto, número, fecha) y aplicar reglas de validación específicas para cada uno. El sistema debe ser capaz de mostrar mensajes de error adecuados cuando las validaciones fallen.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 3 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del Entorno

**Objetivo:** Configurar el entorno de desarrollo para trabajar con React y crear la estructura básica del formulario.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Configurar el proyecto React.
- Crear los componentes básicos del formulario (CampoTexto, CampoNumero, CampoFecha).

**Entregable:** Proyecto React configurado con componentes básicos del formulario.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que cada componente debe manejar su propio estado.
- Piensa en cómo organizar los componentes para que sean reutilizables.

</details>

### Fase 2: Implementación de la Validación Personalizada

**Objetivo:** Implementar la lógica de validación personalizada para cada tipo de campo en el formulario.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Agregar reglas de validación personalizadas para cada tipo de campo.
- Mostrar mensajes de error cuando las validaciones fallen.

**Entregable:** Formulario con validación personalizada implementada y mensajes de error visibles.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza React Hooks para manejar el estado y las validaciones.
- Piensa en cómo estructurar las reglas de validación para que sean claras y mantenibles.

</details>

### Fase 3: Integración y Pruebas

**Objetivo:** Integrar todos los componentes del formulario y realizar pruebas para asegurar que la validación funcione correctamente.

**Tiempo estimado:** 1 hora 30 minutos

**Instrucciones:**

- Integrar todos los componentes del formulario en un único componente principal.
- Realizar pruebas para asegurar que la validación funcione correctamente en todos los campos.

**Entregable:** Formulario completo con validación personalizada y pruebas realizadas.

<details>
<summary>Pistas de conocimiento</summary>

- Asegúrate de que todos los componentes trabajen juntos de manera coherente.
- Realiza pruebas exhaustivas para identificar y corregir cualquier problema de validación.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los React Hooks y por qué se utilizan en este reto?
- **paraQueSirve**: ¿Para qué sirve la validación personalizada en un formulario?
- **comoSeUsa**: ¿Cómo se implementa la validación personalizada utilizando React Hooks?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones en React y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la integración de componentes y la realización de pruebas en este reto?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo con React.
- Implementación de la validación personalizada para cada tipo de campo.
- Integración de todos los componentes en un único componente principal.
- Realización de pruebas exhaustivas para asegurar la funcionalidad del formulario.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
