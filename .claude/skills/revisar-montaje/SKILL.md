---
name: revisar-montaje
description: Revisa un borrador de Remotion para un video o Short. Localiza problemas de comprensión, sincronía, legibilidad, audio o ritmo y comprueba el tramo corregido.
---

Si coordinas la revisión, abre la ficha en [producciones](../../../canal/producciones/) para identificar la promesa, la versión del borrador, el ID de la composición y los FPS. Si hace falta exportar una vista previa, sigue los [comandos de Remotion del kit](../../../README.md#abre-remotion) y usa el punto de entrada de esa pieza. Cuando el usuario pida una segunda mirada, comparte con `revisor-montaje` la promesa y el borrador o los fotogramas disponibles.

Si recibiste el encargo como revisor independiente, usa la promesa y el material recibido. Realiza los dos primeros pasos y comparte tus hallazgos con quien coordina.

1. Mira el borrador desde la perspectiva de alguien que llega por primera vez. Resume qué promete la apertura, qué entendiste y dónde cuesta seguir el hilo.
2. Revisa legibilidad, cortes, continuidad y sincronía con la voz y los subtítulos según el formato. Anota tiempo, problema observable y corrección sugerida. Distingue los problemas que afectan la comprensión de las mejoras opcionales. Si solo tienes fotogramas, marca audio, sincronía y ritmo como pendientes de comprobar.
3. Si el usuario solicita corregir un problema, prueba primero el fotograma o intervalo afectado con `npm run still` o `npm run render` y `--frames`. Usa una salida distinta a la del borrador. Compara el tramo corregido con el anterior y anota la versión, los hallazgos y el siguiente ajuste en la ficha cuando estés actualizando la pieza.
