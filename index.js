#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = path.join(process.cwd(), ".skills");
const SKILL_FILE = path.join(SKILLS_DIR, "n8n-migration-skill.md");

const SKILL_TEMPLATE = `# N8N Migration Skill

> **¿Qué es esto?**
> Una "Agent Skill" es un archivo de instrucciones que le das a tu agente de IA (Claude, Cursor, Copilot...)
> para que entienda tu proyecto desde el primer mensaje. Es como un briefing permanente:
> le explicas de dónde vienes (n8n), a dónde vas (código), y cómo quieres que trabaje contigo.
>
> **Cómo usarlo:** Rellena las secciones de abajo con la información de TU proyecto.
> Luego, en tu agente de IA, referencia este archivo o pega su contenido al inicio de cada conversación.

---

## Contexto del proyecto
<!-- ¿Qué hace tu proyecto? ¿Qué workflows estás migrando de n8n? ¿Cuál es el objetivo final? -->
[DESCRIBE AQUÍ TU PROYECTO Y QUÉ AUTOMATIZACIONES TIENES EN N8N]

## Stack tecnológico de destino
<!-- ¿A qué tecnología estás migrando? Ejemplo: Node.js + Supabase + Vercel, o Python + FastAPI, etc. -->
[INDICA EL STACK AL QUE MIGRAS]

## Reglas de código
<!-- ¿Cómo quieres que escriba el código tu agente? Ejemplo: sin comentarios innecesarios,
     siempre TypeScript estricto, sin dependencias externas salvo las listadas, etc. -->
[INSERTA TUS REGLAS DE CÓDIGO]

## Convenciones de arquitectura
<!-- ¿Cómo organizas los archivos? Ejemplo: lógica de negocio en /lib, rutas en /app/api, etc. -->
[INSERTA TUS CONVENCIONES DE ARQUITECTURA]

## Workflows a migrar
<!-- Lista los workflows de n8n que quieres migrar. Para cada uno indica qué hace y su prioridad. -->
- [ ] [NOMBRE DEL WORKFLOW 1] — [QUÉ HACE]
- [ ] [NOMBRE DEL WORKFLOW 2] — [QUÉ HACE]

## Ejemplos de uso
<!-- Da ejemplos concretos de lo que el agente DEBE y NO DEBE hacer en este proyecto. -->
[INSERTA EJEMPLOS DE USO]
`;

// 1. Crear carpeta .skills/
if (!fs.existsSync(SKILLS_DIR)) {
  fs.mkdirSync(SKILLS_DIR, { recursive: true });
  console.log("📁 Carpeta .skills/ creada.");
} else {
  console.log("⚠️  La carpeta .skills/ ya existe. Continuando...");
}

// 2. Crear el archivo de skill (sin sobrescribir si ya existe)
if (!fs.existsSync(SKILL_FILE)) {
  fs.writeFileSync(SKILL_FILE, SKILL_TEMPLATE, "utf8");
  console.log("📄 Archivo .skills/n8n-migration-skill.md creado.");
} else {
  console.log("⚠️  El archivo .skills/n8n-migration-skill.md ya existe. No se sobreescribió.");
}

console.log("\n✅ ¡Listo! Abre .skills/n8n-migration-skill.md y personaliza tu skill.");
