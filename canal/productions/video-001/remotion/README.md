# Remotion for this production

This folder contains an example composition. `index.ts` registers the root, `Root.tsx` defines the composition's ID, size, and duration, and `PaperFold.tsx` contains the scene. The [kit README](../../../../README.md#open-remotion) explains how to open and export it.

For a new video, duplicate the example production folder and change the composition ID in `Root.tsx`. For a Short, copy this `remotion/` folder into the production and adapt the framing and composition to a vertical format such as 1080 × 1920. Set the duration and frame rate for the production. Keep shared components in [assets](../../../assets/). If you use `staticFile()` for production assets, put them in the production's `public/` folder and pass that path with `--public-dir` to both Studio and render.

Run these commands from the kit root for a copy in `video-002` with the ID `Video002`.

```sh
npm run studio -- canal/productions/video-002/remotion/index.ts
npm run render -- canal/productions/video-002/remotion/index.ts Video002 out/video-002.mp4
```

If a local production script needs credentials, follow the [local environment guide](../../../../README.md#local-environment). Pass only the resulting media or render inputs to Remotion.

If the production needs narration synchronization, keep the alignment alongside the composition and check cuts against the final recording. Use `npm run still` to test a single frame. For a segment, add `--frames=30-59` to the render command and choose a separate output file. Git ignores `out/` and `renders/`.
