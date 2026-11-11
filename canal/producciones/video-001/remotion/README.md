# Remotion en esta pieza

Esta carpeta contiene una composición de ejemplo. `index.ts` registra la raíz, `Root.tsx` define el ID, tamaño y duración de la composición, y `ElPliegueDelPapel.tsx` contiene la escena. El [README del kit](../../../../README.md#abre-remotion) explica cómo abrirla y exportarla.

Para un video nuevo, duplica la carpeta de ejemplo y cambia el ID de la composición en `Root.tsx`. Para un Short, copia esta carpeta `remotion/` dentro de la pieza y adapta el encuadre y la composición al formato vertical, por ejemplo 1080 × 1920. Define la duración y los FPS según la pieza. Guarda los componentes compartidos en [materiales](../../../materiales/). Si usas `staticFile()` para archivos de la pieza, ponlos en su carpeta `public/` y pasa `--public-dir` con esa ruta tanto a Studio como al render.

Ejemplo desde la raíz del kit para una copia en `video-002` con ID `Video002`.

```sh
npm run studio -- canal/producciones/video-002/remotion/index.ts
npm run render -- canal/producciones/video-002/remotion/index.ts Video002 out/video-002.mp4
```

Si la pieza requiere sincronía con la voz, guarda la alineación con la composición y verifica los cortes contra la locución final. Usa `npm run still` para probar un fotograma o añade `--frames=30-59` al render con un nombre de salida distinto para revisar ese tramo. Las salidas en `out/` o `renders/` quedan fuera de Git.
