# n8n-to-claude-skill

Instala una plantilla de "Agent Skill" en cualquier proyecto con un solo comando.
La skill generada es un archivo Markdown que puedes personalizar con las reglas,
convenciones y contexto que quieres que tu agente de IA siga en ese proyecto.

## Requisitos previos

- Node.js `>= 16` — [Descargar aquí](https://nodejs.org)

## Instalación

Ejecuta este comando en la raíz del proyecto donde quieras instalar la skill:

```bash
npx angelapaia/n8n-to-claude-skill
```

## ¿Qué genera?

```
tu-proyecto/
└── .skills/
    └── custom-skill.md   ← Tu plantilla de skill, lista para personalizar
```

## Cómo personalizar

Abre `.skills/custom-skill.md` y reemplaza los marcadores de posición:

| Marcador | Qué poner |
|---|---|
| `[NOMBRE DE TU SKILL]` | Nombre descriptivo, ej: `Backend Node.js Rules` |
| `[DESCRIBE EL CONTEXTO DEL PROYECTO]` | Qué hace el proyecto, stack, equipo |
| `[INSERTA TUS REGLAS DE CÓDIGO]` | Convenciones de estilo, linting, patrones prohibidos |
| `[INSERTA TUS CONVENCIONES DE ARQUITECTURA]` | Estructura de carpetas, capas, módulos |
| `[INSERTA EJEMPLOS DE USO]` | Ejemplos concretos de lo que el agente debe o no debe hacer |

## Licencia

MIT
