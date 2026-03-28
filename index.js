#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = path.join(process.cwd(), ".skills");
const SKILL_FILE = path.join(SKILLS_DIR, "n8n-migration-skill.md");

const SKILL_TEMPLATE = `# N8N Migration Skill

## Contexto del proyecto
[DESCRIBE EL CONTEXTO DEL PROYECTO]

## Reglas de código
[INSERTA TUS REGLAS DE CÓDIGO]

## Convenciones de arquitectura
[INSERTA TUS CONVENCIONES DE ARQUITECTURA]

## Ejemplos de uso
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
