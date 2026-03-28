# n8n-to-claude-skill

Una Agent Skill que enseña a Claude a ayudarte a migrar tus workflows de n8n (o Make) a código real. Compatible con Claude Code, Claude.ai y la API de Claude.

---

## ¿Qué problema resuelve?

Cuando quieres migrar tus workflows de n8n a código, cada vez que abres una conversación con Claude tienes que re-explicar lo mismo: de dónde vienes, qué es n8n, qué nodos usas, cómo quieres que te hable...

Esta skill lo resuelve. Al instalarla, Claude sabe automáticamente:

- **Cómo hablar contigo** — Asume que vienes del mundo no-code, explica la jerga técnica, y usa analogías con n8n
- **Cómo traducir nodos** — Tabla completa de equivalencias: Schedule Trigger → cron, HTTP Request → fetch, Text Classifier → Claude API...
- **Qué arquitectura recomendar** — 4 opciones explicadas con analogías de n8n (script, skill, módulo web, Mission Control)
- **Cómo protegerte** — Detecta API keys expuestas, workflows en producción, y recomienda migración paralela
- **Cómo analizar tus workflows** — Pega un JSON de n8n y obtén un análisis completo con plan de migración

---

## Instalación

### En Claude Code

```bash
/plugin marketplace add angelapaia/n8n-to-claude-skill
```

Luego instala el plugin:

```
/plugin install n8n-to-claude@n8n-to-claude
```

### En Claude.ai

1. Ve a **Settings > Skills**
2. Sube el archivo `skills/n8n-to-claude/SKILL.md` de este repositorio

---

## Cómo usarla

Una vez instalada, la skill se activa automáticamente cuando:

- **Pegas un JSON** de un workflow de n8n → Análisis completo
- **Pegas varios JSONs** → Análisis portfolio con roadmap de migración priorizado
- **Describes un workflow** sin JSON → Entrevista guiada de 6 preguntas
- **Pides aprender** → Modo aprendizaje con explicaciones desde cero
- **Pides implementar** → Modo construcción con código listo para ejecutar

### Ejemplo

Simplemente pega tu JSON de n8n y la skill hace el resto:

```
Aquí tienes mi workflow de n8n: { "nodes": [...], "connections": {...} }
```

Claude te devolverá:
- Qué hace el workflow en lenguaje simple
- Tabla de traducción de nodos a código
- Arquitectura recomendada
- Mejoras detectadas (seguridad, eficiencia, fiabilidad)
- Opciones para implementarlo

---

## ¿Qué contiene la skill?

| Sección | Para qué sirve |
|---|---|
| Detección de modo | Detecta si pegas 1 JSON, varios, o describes sin JSON |
| Tabla de traducción | 20+ nodos de n8n mapeados a equivalentes en código |
| Árbol de arquitectura | Decide qué tipo de proyecto crear (script, skill, web app, Mission Control) |
| Opciones de deploy | Local (pm2), Vercel Pro, Vercel Hobby + cron externo |
| Detección de mejoras | Seguridad (🔴), eficiencia (🟡), simplicidad (🟢) |
| Migración paralela | Estrategia para workflows en producción |
| Sistema de scoring | Prioriza qué workflow migrar primero |
| Modo aprendizaje | Explica cada concepto con analogías de n8n |
| Modo construcción | Genera todo el código sin explicaciones innecesarias |

---

## Estructura del repositorio

```
n8n-to-claude-skill/
├── .claude-plugin/
│   └── marketplace.json       ← Registro del plugin para Claude Code
├── skills/
│   └── n8n-to-claude/
│       └── SKILL.md           ← La skill completa (v3.0)
├── .gitignore
└── README.md
```

---

## Licencia

MIT — Creado por [Angel Aparicio](https://github.com/angelapaia) · [iAmasters](https://www.skool.com/ia-masters)
