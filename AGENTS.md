# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Senior

### Brecha de conocimiento
Aplica diferentes tipos de arquitectura Frontend y las aplica basado en el contexto del negocio

### Misión / candidato
Profesional Senior en eCommerce con experiencia en proyectos de alto impacto

### Reto
- Tema: Aplica diferentes tipos de arquitectura Frontend y las aplica basado en el contexto del negocio
- Seniority: senior-l3
- Tipo: mixed
- Título: Arquitectura Frontend en eCommerce
- Tiempo estimado: 8-10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Exploración del contexto de negocio — objetivo: Entender las necesidades del negocio y los requisitos del proyecto para elegir la arquitectura frontend adecuada. — entregable (NO resolver): Un informe que detalle las necesidades del negocio y las restricciones técnicas relevantes.
- Fase 2: Evaluación de arquitecturas frontend — objetivo: Evaluar diferentes tipos de arquitectura frontend y elegir la más adecuada para el proyecto. — entregable (NO resolver): Un informe que detalle las diferentes arquitecturas frontend evaluadas y la opción elegida, junto con la justificación.
- Fase 3: Implementación de la arquitectura frontend elegida — objetivo: Implementar la arquitectura frontend elegida y asegurar que cumple con las necesidades del negocio y las restricciones técnicas. — entregable (NO resolver): La implementación de la arquitectura frontend elegida, junto con la documentación que detalle cómo se alinea con las necesidades del negocio y las restricciones técnicas.

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
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
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
{
  "name": "ecommerce-frontend",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "axios": "^1.4.0",
    "styled-components": "^5.3.11"
  }
}

// === ARCHIVO: src/components/Button.js ===
import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;

// === ARCHIVO: src/services/api.js ===
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ecommerce.com',
});

export const getProducts = () => api.get('/products');

// === ARCHIVO: src/utils/formatDate.js ===
export const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

// === ARCHIVO: src/pages/Home.js ===
import React from 'react';
import { getProducts } from '../services/api';
import Button from '../components/Button';

const Home = () => {
  const handleClick = async () => {
    const products = await getProducts();
    console.log(products);
  };

  return (
    <div>
      <h1>Bienvenido a nuestro eCommerce</h1>
      <Button onClick={handleClick}>Cargar productos</Button>
    </div>
  );
};

export default Home;

// === ARCHIVO: src/routes/index.js ===
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default Routes;

// === ARCHIVO: src/styles/global.css ===
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

// === ARCHIVO: docs/business-needs.md ===
# Necesidades del negocio y restricciones técnicas

## Necesidades del negocio
- Escalabilidad del sistema.
- Mantenibilidad del código.
- Eficiencia en el rendimiento.

## Restricciones técnicas
- Uso de React como framework principal.
- Arquitectura basada en componentes.

// === ARCHIVO: docs/frontend-architecture-evaluation.md ===
# Evaluación de arquitecturas frontend

## Arquitecturas evaluadas
- Arquitectura monolítica.
- Arquitectura de microfrontends.
- Arquitectura basada en componentes.

## Opción elegida
- Arquitectura basada en componentes.

## Justificación
- Facilita la modularización y reutilización de componentes.
- Mejora la mantenibilidad y escalabilidad del sistema.
- Alinea con las necesidades del negocio y las restricciones técnicas.
```
