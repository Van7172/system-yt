# system-yt

Kit de producción para organizar un canal de YouTube y llevar videos, Shorts y temas musicales desde la idea hasta la publicación. Incluye plantillas Markdown, un proyecto de Remotion y perfiles para Codex o Claude Code.

## Empieza por el canal

Si usas la plantilla en GitHub, crea tu copia con **Use this template**. Si ya tienes la carpeta local del kit, ábrela directamente. Inicia tu editor o asistente en la raíz de esa copia, donde están este README y `package.json`.

Las plantillas contienen comentarios HTML que GitHub oculta en la vista de lectura. Abre el archivo en tu editor o usa el icono del lápiz en GitHub. Escribe debajo del comentario y copia al texto visible los enlaces que quieras conservar.

| Documento | Qué decide |
| --- | --- |
| [Identidad del canal](canal/00-config/identidad-canal.md) | A quién le hablas, qué le prometes y qué criterios editoriales sigues. |
| [Sistema visual](canal/00-config/sistema-visual.md) | Cómo se ven y se comportan las escenas, y qué recursos reutilizas. |
| [Procedimiento de guion](canal/00-config/procedimiento-guion.md) | Cómo pasas de las fuentes al texto narrado. |
| [Guía de miniaturas](canal/00-config/guia-miniaturas.md) | Cómo se complementan título y miniatura y cómo revisas la propuesta. |
| [Procedimiento de producción](canal/00-config/procedimiento-video-nuevo.md) | Qué etapas usas y cómo sabes que una pieza puede pasar a la siguiente. |

Completa primero la identidad del canal. Desarrolla los demás documentos según lo que necesite tu primera pieza.

El procedimiento de guion te deja elegir la estructura según el canal y el tema. Un explicador puede abrir con una situación concreta, presentar la promesa y anticipar el recorrido. El desarrollo puede ser continuo o dividirse en escenas, pasos o capítulos si eso facilita seguirlo.

## De la idea a la publicación

1. Copia la [plantilla de idea](canal/ideas-videos/plantilla-idea.md) en la misma carpeta y ponle un nombre descriptivo. Anota qué pregunta abre, por qué le importaría a tu público y qué podrías mostrar para responderla.
2. Cuando decidas avanzar, duplica la carpeta de [video](canal/producciones/video-001/), [Short](canal/producciones/short-001/) o [tema musical](canal/producciones/tema-001/). Usa el siguiente número libre de ese formato. Completa su `ficha.md` con la promesa, el estado y el siguiente paso. Si conservas la nota de idea, enlaza desde ella a la ficha para retomarla.
3. Trabaja desde los enlaces de la ficha. Si la pieza lleva un montaje en Remotion, guarda su composición en `remotion/` y revisa un borrador antes de preparar la publicación. Para un tema musical, parte de su `plan-produccion.md`. Guarda los recursos reutilizables en [materiales](canal/materiales/) y las referencias compartidas en [referencias](canal/referencias/).
4. Completa `publicacion.md` con la propuesta elegida. Cuando la pieza esté publicada, registra el enlace final ahí, actualiza su estado en la ficha y añade al [inventario](canal/inventario-publicado.md) un enlace a esa ficha.

Anota en la ficha los experimentos de esa pieza. Si una prueba da lugar a una regla para todo el canal, actualiza el documento base correspondiente. Para retomar una pieza basta con abrir su ficha y seguir el siguiente paso.

## Abre Remotion

Remotion ya está configurado en el kit. En la copia local con las dependencias instaladas, abre la composición `Video001` directamente desde la raíz del kit.

```sh
npm run studio
```

En una copia recién clonada, usa Node.js 22 o posterior y ejecuta `npm ci` desde la raíz del kit. Git excluye `node_modules/` y `npm ci` reconstruye esa carpeta con las versiones de `package-lock.json`. Después, abre Studio con `npm run studio`.

Desde otra terminal en la misma carpeta puedes comprobar los tipos, exportar un fotograma o renderizar el video de ejemplo.

```sh
npm run check
npm run still -- Video001 out/video-001.png --frame=45
npm run render -- Video001 out/video-001.mp4
```

Los archivos de ejemplo se guardan en `out/`, una carpeta que Git excluye. Para abrir otra pieza, ejecuta `npm run studio -- ruta/a/remotion/index.ts` con el punto de entrada de esa pieza. Sigue el [ejemplo de producción](canal/producciones/video-001/remotion/) para registrar la composición, ubicar los recursos y renderizar solo el tramo que estés revisando. Consulta las [condiciones de uso de Remotion](https://www.remotion.dev/license) según tu caso.

## Usa las skills

Abre Codex o Claude Code en la raíz de tu copia. Puedes invocar las skills con estos ejemplos. En Codex, selecciona la skill desde el selector si tu cliente muestra sugerencias al escribir su nombre.

| Tarea | Codex | Claude Code |
| --- | --- | --- |
| Define la identidad o revisa el sistema visual | `$documentar-canal` Ayúdame a definir a quién le hablo. | `/documentar-canal` Ayúdame a definir a quién le hablo. |
| Pon a prueba una idea | `$evaluar-idea` Compara dos ángulos para esta idea. | `/evaluar-idea` Compara dos ángulos para esta idea. |
| Avanza desde la ficha | `$desarrollar-video` Retoma video-002 desde su ficha y planea la siguiente etapa. | `/desarrollar-video` Retoma video-002 desde su ficha y planea la siguiente etapa. |
| Revisa el montaje | `$revisar-montaje` Revisa el borrador de video-002 y anota los problemas por tiempo. | `/revisar-montaje` Revisa el borrador de video-002 y anota los problemas por tiempo. |
| Prepara la publicación | `$preparar-publicacion` Propón título, miniatura y descripción para video-002. | `/preparar-publicacion` Propón título, miniatura y descripción para video-002. |

Las definiciones de Codex están en [`.agents/skills/`](.agents/skills/) y las de Claude Code en [`.claude/skills/`](.claude/skills/). Si actualizas una skill, lleva el mismo cambio a las dos copias.

## Pide una segunda mirada

| Subagente | Skill que aplica | Ejemplo para Codex o Claude Code |
| --- | --- | --- |
| `revisor-ideas` | `evaluar-idea` | «Pide a `revisor-ideas` que cuestione la promesa de esta idea y sugiera un ángulo mejor». |
| `director-video` | `desarrollar-video` | «Pide a `director-video` que priorice las escenas y los recursos compartidos entre el video largo y el Short». |
| `especialista-videos-largos` | `desarrollar-video` | «Pide a `especialista-videos-largos` que revise si la estructura de video-002 ayuda a cumplir su promesa». |
| `especialista-shorts` | `desarrollar-video` | «Pide a `especialista-shorts` que proponga un fragmento de video-002 que se entienda por sí solo y cómo encuadrarlo en vertical». |
| `artista-visual` | `documentar-canal`, sección de sistema visual | «Pide a `artista-visual` que proponga dos formas de mostrar la comparación de la primera escena». |
| `revisor-montaje` | `revisar-montaje` | «Pide a `revisor-montaje` que revise el corte de video-002 y marque dónde se pierde el hilo». |

En Codex, el perfil indica al subagente qué archivo de skill leer antes de trabajar. En Claude Code, el perfil precarga la skill. Basta con pedir el subagente por nombre y darle la tarea. El asistente principal reúne sus recomendaciones y aplica las ediciones que le pidas.

Los perfiles viven en [`.codex/agents/`](.codex/agents/) y [`.claude/agents/`](.claude/agents/).

## Ejemplo ficticio

Para un video sobre cómo un pliegue cambia la resistencia del papel, la ficha puede prometer una comparación con la misma carga. El dossier describe la prueba y sus límites. El guion abre con la comparación, el plan visual indica qué tomas permiten verla y la publicación propone un título y una miniatura acordes a lo que se grabó. Si la toma comparativa está pendiente, ese será el siguiente paso en la ficha.

## Licencia

El contenido original del kit se distribuye bajo la [licencia MIT](LICENSE). Remotion y las demás dependencias se rigen por sus propias licencias.
