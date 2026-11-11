---
name: develop-video
description: "Develop a long-form YouTube video or Short from its brief, from research and scripting to scene planning and Remotion production."
---

Open the brief in [productions](../../../canal/productions/) and follow its next step. To start a production, duplicate the folder for its format and record the promise and next step. Follow the brief's links and consult the channel documents relevant to the current stage.

- **Research.** Consult the [channel identity](../../../canal/00-config/channel-identity.md). Record claims, sources, and limitations in the long-form research file or the Short's script notes. Flag claims that still need evidence.
- **Script.** Follow the [scriptwriting guide](../../../canal/00-config/scriptwriting-guide.md) and the decisions for this production. If the structure is open, choose the format that makes the promise easiest to follow. Use continuous narration or add divisions where they aid understanding. An explainer can open with a concrete situation, state the promise, and outline the journey when helpful. Keep production directions outside the spoken text.
- **Production.** Consult the [production workflow](../../../canal/00-config/production-workflow.md) and [visual system](../../../canal/00-config/visual-system.md). For each scene, describe what viewers should understand, how it relates to the script, and which assets are available. Use the visual plan for long-form video and the script notes for Shorts. Check synchronization against the final narration when available.
- **Remotion.** Follow the [example composition](../../../canal/productions/video-001/remotion/) and use the entry point for the production. Tie scenes to a line or action and an estimated duration. For a complex sequence, assemble a low-resolution preview or export a representative frame to check legibility and pacing. Adjust timing against final narration before rendering. Run `npm run check` after changing a composition.

When a production tool needs credentials, follow the [local environment guide](../../../README.md#local-environment). Use the variables required by that tool through its local configuration. Keep their values in the private environment and refer to variable names in documentation or output.

Preserve the user's decisions and flag missing ones. When updating a production, record its status and next concrete step in the brief. A music track's brief links to its production plan and lyrics, when applicable.
