# n8n-to-claude-skill

Instala en tu proyecto una "Agent Skill" lista para usar: un archivo de instrucciones
que le enseña a tu agente de IA (Claude, Cursor, Copilot...) cómo ayudarte a migrar
tus automatizaciones de n8n a código real.

---

## ¿Qué problema resuelve?

Cuando quieres migrar tus workflows de n8n a código, cada vez que abres una conversación
con tu agente de IA tienes que re-explicar lo mismo: de dónde vienes, qué es n8n, qué nodos
usas, cómo quieres que te hable...

Esta skill lo resuelve. Instala un archivo con:

- **Instrucciones permanentes** para el agente: cómo hablar con alguien que viene de n8n,
  qué nivel técnico asumir, cómo generar el código
- **Tabla de traducción** de nodos n8n a su equivalente en código (Schedule Trigger → cron,
  HTTP Request → fetch, Text Classifier → Claude API...)
- **Las 4 arquitecturas** posibles para migrar, con analogías de n8n para entenderlas
- **Reglas de seguridad** automáticas: si el agente detecta API keys expuestas o workflows
  en producción, sabe cómo actuar
- **Secciones para personalizar** con los datos de TU proyecto

---

## Requisitos

- Node.js `>= 16` — [Descargar aquí](https://nodejs.org)

---

## Instalación

Ejecuta este comando en la raíz del proyecto donde quieras instalar la skill:

```bash
npx angelapaia/n8n-to-claude-skill
```

Eso es todo. No instala nada en tu sistema, no modifica ningún archivo existente.

---

## ¿Qué genera?

```
tu-proyecto/
└── .skills/
    └── n8n-migration-skill.md   ← La skill, lista para usar y personalizar
```

---

## Cómo usarla

1. Abre `.skills/n8n-migration-skill.md`
2. Rellena las secciones al final del archivo con la información de tu proyecto:
   - Descripción de tu proyecto
   - Stack tecnológico al que migras
   - Lista de workflows de n8n que quieres migrar
3. Al iniciar una sesión con tu agente de IA, adjunta este archivo o pega su contenido
4. Tu agente leerá las instrucciones y trabajará con ese contexto desde el primer mensaje

---

## Licencia

MIT — Creado por [Angel Aparicio](https://github.com/angelapaia) · iAmasters
