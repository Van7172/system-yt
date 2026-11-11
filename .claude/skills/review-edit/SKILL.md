---
name: review-edit
description: "Review a Remotion draft for a video or Short, report timestamped issues, and verify corrected sections."
---

If you are coordinating the review, open the brief in [productions](../../../canal/productions/) and identify the promise, draft version, composition ID, and frame rate. Follow the [Remotion commands](../../../README.md#open-remotion) to export a preview from the production's entry point if needed. When the user asks for a second opinion, share the promise and available draft or frames with `edit-reviewer`.

If you were asked to be the independent reviewer, use the promise and material you received. Complete the first two steps and report to the coordinator.

1. Watch the draft as a first-time viewer. Summarize what the opening promises, what you understood, and where the thread becomes hard to follow.
2. Check legibility, cuts, continuity, and synchronization with narration and captions as applicable. Record the timestamp, observable problem, and suggested fix. Distinguish issues that hinder comprehension from optional improvements. With still frames alone, mark audio, synchronization, and pacing as unverified.
3. When asked to make a correction, test the affected frame or range with `npm run still` or `npm run render -- ... --frames=30-59`, using a separate output. Compare it with the earlier version. If you update the production, record the version, findings, and next adjustment in the brief.
