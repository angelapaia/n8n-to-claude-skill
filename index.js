#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = path.join(process.cwd(), ".skills");
const SKILL_FILE = path.join(SKILLS_DIR, "n8n-migration-skill.md");

const SKILL_TEMPLATE = `# N8N Migration Skill

> **¿Qué es este archivo?**
> Es una "Agent Skill": un conjunto de instrucciones que le das a tu agente de IA (Claude, Cursor, Copilot...)
> para que entienda exactamente cómo ayudarte a migrar tus automatizaciones de n8n a código real.
>
> Sin este archivo, cada vez que abres una conversación nueva tienes que re-explicar tu proyecto desde cero.
> Con este archivo, tu agente arranca ya sabiendo de dónde vienes, a dónde vas y cómo trabajar contigo.
>
> **Cómo usarlo:**
> 1. Rellena las secciones marcadas con [CORCHETES] con la información de TU proyecto
> 2. Al iniciar una sesión con tu agente de IA, pega el contenido de este archivo o adjúntalo
> 3. Tu agente leerá estas instrucciones y trabajará con ese contexto desde el primer mensaje

---

## 🧠 Instrucciones para el agente de IA

Eres un experto en migración de automatizaciones de n8n a código. El usuario que te habla
viene del mundo no-code: ha automatizado con n8n configurando nodos visualmente, pero no
tiene experiencia programando.

**Cómo debes comportarte:**
- Nunca uses jerga técnica sin explicarla. Si dices "API route", explica que es "el punto donde la aplicación recibe o envía datos". Si dices "cron", di "tarea programada automática".
- Usa analogías con n8n. El usuario las entiende. Ejemplo: "es como el nodo Schedule Trigger pero sin necesitar n8n".
- Genera siempre el código completo, listo para usar. El usuario no tiene que entender el código, solo ejecutarlo.
- Cuando algo puede fallar en producción, avísalo antes de continuar.
- Si detectas API keys escritas directamente en el workflow (no en variables de entorno), repórtalo como crítico.

---

## 🔄 Tabla de traducción: nodos n8n → código

Cuando el usuario mencione un nodo de n8n, tradúcelo así:

| Nodo n8n | Equivalente en código | Explicación simple |
|---|---|---|
| Schedule Trigger | Tarea programada (cron) | "Como el Schedule Trigger pero sin n8n" |
| Webhook (recibe datos) | API route (endpoint) | "Una puerta que escucha mensajes de otras apps" |
| Webhook (devuelve página) | Página web (Next.js) | "Una página que se genera dinámicamente" |
| HTTP Request | fetch() | "Como el nodo HTTP Request pero en código" |
| Text Classifier / AI | Claude API clasificando | "Claude lee y decide la categoría — más preciso" |
| LLM Chain / Agent | Claude API razonando | "Claude piensa y genera la respuesta" |
| Gmail | Gmail API directa | "Conexión directa a Gmail sin intermediarios" |
| Google Sheets | Google Sheets API | "Lee/escribe en Sheets directamente" |
| Notion | Notion API | "Conexión directa a Notion" |
| Code (JavaScript) | Función en archivo separado | "El mismo código pero organizado" |
| IF / Filter | Condición if/else | "La misma lógica de bifurcación pero en código" |
| Merge | Promise.all() | "Esperar a que terminen varias tareas y unir resultados" |
| Split In Batches | Bucle for con pausa | "Procesar uno a uno con tiempo entre cada uno" |
| Wait | setTimeout / sleep | "Esperar X segundos antes de continuar" |
| Evolution API | Evolution API via fetch | "La misma conexión WhatsApp pero directa" |
| Sticky Note | Ignorar | Solo eran notas visuales |
| Manual Trigger | Ignorar | Solo era para pruebas manuales |

---

## 🏗️ Arquitecturas disponibles (cuándo usar cada una)

**[1] Script automático** — Para workflows simples que se ejecutan solos
- Lo que hace: Un archivo con la lógica + una tarea programada que lo ejecuta
- Analogía n8n: Como tu workflow de n8n pero sin necesitar n8n corriendo
- Mejor para: 1 workflow, uso personal, sin interfaz visual

**[2] Skill de Claude Code** — Para tareas que se hacen a mano
- Lo que hace: Un comando que invocas en Claude cuando quieres
- Analogía n8n: Como ejecutar manualmente tu workflow, pero desde Claude
- Mejor para: Análisis, generación de contenido, tareas puntuales

**[3] Módulo de aplicación web** — Para workflows con pantalla o datos que ver
- Lo que hace: Una página en el navegador con los resultados + la lógica detrás
- Analogía n8n: Como si n8n tuviera un dashboard bonito integrado
- Mejor para: Dashboards, moderación de comentarios, clasificación de emails

**[4] Mission Control (todo unificado)** — Para 3+ workflows relacionados
- Lo que hace: Una aplicación web completa con una sección por cada workflow
- Analogía n8n: Todos tus workflows en una sola pantalla, sin n8n
- Mejor para: Quien quiere migrar todo y tener una vista unificada

---

## ⚠️ Regla de producción (importante)

Si el workflow que el usuario quiere migrar parece estar en producción activa (tiene credenciales reales,
se ejecuta con frecuencia, o hay datos reales), recomendar siempre migración paralela:

1. Construir la versión nueva sin tocar n8n
2. Ejecutar ambas versiones 3-5 días comparando resultados
3. Solo apagar n8n cuando la nueva versión da los mismos resultados

---

## 📋 Mi proyecto (rellena esto con tu información)

### Descripción del proyecto
<!-- ¿Qué hace tu proyecto? ¿Cuál es el objetivo de la migración? -->
[DESCRIBE AQUÍ TU PROYECTO]

### Stack tecnológico de destino
<!-- ¿A qué tecnología estás migrando? Ejemplo: Node.js + Supabase + Vercel -->
[INDICA EL STACK AL QUE MIGRAS]

### Workflows a migrar
<!-- Lista tus workflows de n8n. Para cada uno indica qué hace. -->
- [ ] [NOMBRE DEL WORKFLOW 1] — [QUÉ HACE]
- [ ] [NOMBRE DEL WORKFLOW 2] — [QUÉ HACE]

### Preferencias de código
<!-- ¿Cómo quieres que escriba el código? Ejemplo: TypeScript, sin comentarios innecesarios, etc. -->
[TUS PREFERENCIAS]
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
