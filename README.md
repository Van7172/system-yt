# system-yt

A production kit for running a YouTube channel and taking long-form videos, Shorts, and music tracks from idea to release. It includes Markdown templates, a Remotion project, and skills and subagents for Codex and Claude Code.

## Set up your channel

Open your copy of the kit at the folder containing this README and `package.json`. When the repository is enabled as a GitHub template, you can start a new copy with **Use this template**.

The blank templates contain HTML comments with English instructions first and Spanish instructions second. GitHub hides these comments in the rendered view. Open the source in your editor or use GitHub's pencil icon. Write your own content below the comment in the language you use for your channel.

| Document | What it defines |
| --- | --- |
| [Channel identity](canal/00-config/channel-identity.md) | Who you speak to, what you promise, and what editorial standards you follow. |
| [Visual system](canal/00-config/visual-system.md) | How scenes look and move, and which assets you reuse. |
| [Scriptwriting guide](canal/00-config/scriptwriting-guide.md) | How to turn research into narration. |
| [Thumbnail guide](canal/00-config/thumbnail-guide.md) | How title and thumbnail work together and how to review a proposal. |
| [Production workflow](canal/00-config/production-workflow.md) | Which stages you use and how to tell when a production can move forward. |

Start with your channel identity and fill in the other documents as your first production needs them. Choose a script structure that fits the channel and the topic. An explainer can open with a concrete situation, state the promise, and outline the journey. The body can use continuous narration, scenes, steps, or chapters.

## From idea to release

1. Duplicate the [idea template](canal/ideas/idea-template.md) in the same folder and give it a descriptive name. Record the question, why it matters to your audience, and what you could show to answer it.
2. When you decide to proceed, duplicate the [video](canal/productions/video-001/), [Short](canal/productions/short-001/), or [music track](canal/productions/track-001/) folder. Use the next available number for that format. Record the promise, status, and next step in `brief.md`. Link to the brief from the idea if you keep both.
3. Follow the links in the brief. If the production uses Remotion, put its composition in `remotion/` and review a draft before preparing the release. For a music track, start from `production-plan.md`. Keep reusable [assets](canal/assets/) and shared [references](canal/references/) in their channel folders.
4. Record the selected title, description, and other release details in `publishing.md`. After publishing, record the final URL there, update the status in the brief, and link to that brief from the [published index](canal/published-index.md).

Record experiments in the brief. If an experiment produces a rule for the whole channel, update the relevant channel document. To resume a production, open its brief and follow the next step.

## Local environment

The bundled Remotion example runs without credentials. If you add a tool that needs credentials, copy [`.env.example`](.env.example) to `.env` in the kit root. Add the variables the tool requires and put their values in `.env`. Commit variable names and empty or fictional examples in `.env.example`.

```powershell
if (-not (Test-Path -LiteralPath .env)) {
    Copy-Item -LiteralPath .env.example -Destination .env
}
```

```sh
[ -e .env ] || cp .env.example .env
```

Create `.env` only if it is missing. Git ignores `.env` and its variants. Each integration must load the variables through its own configuration or a local script. Keep secrets out of browser-rendered Remotion compositions, composition props, logs, and documentation.

## Open Remotion

Remotion is configured in the kit. In a local copy with dependencies installed, open the `Video001` composition from the kit root.

```sh
npm run studio
```

For a fresh clone, use Node.js 22 or later and run `npm ci` from the kit root. It restores `node_modules/` using `package-lock.json`. Then open Studio with `npm run studio`.

From another terminal in the same directory, you can check types, export a frame, or render the example.

```sh
npm run check
npm run still -- Video001 out/video-001.png --frame=45
npm run render -- Video001 out/video-001.mp4
```

Git ignores `out/`, where these exports are written. To open another production, run `npm run studio -- path/to/remotion/index.ts` with its entry point. The [example production](canal/productions/video-001/remotion/) shows how to register a composition, organize assets, and render the segment you are reviewing. See the [Remotion license terms](https://www.remotion.dev/license) for your use case.

## Use the skills

Open Codex or Claude Code at the root of your copy. In Codex, select the skill from the picker if your client shows suggestions as you type its name.

| Task | Codex | Claude Code |
| --- | --- | --- |
| Define the channel or review its visual system | `$document-channel` Help me define my audience. | `/document-channel` Help me define my audience. |
| Evaluate an idea | `$evaluate-idea` Compare two angles for this idea. | `/evaluate-idea` Compare two angles for this idea. |
| Resume a production | `$develop-video` Open the brief for video-002 and plan the next stage. | `/develop-video` Open the brief for video-002 and plan the next stage. |
| Review an edit | `$review-edit` Review the draft of video-002 and flag issues by timestamp. | `/review-edit` Review the draft of video-002 and flag issues by timestamp. |
| Prepare the release | `$prepare-publishing` Propose a title, thumbnail, and description for video-002. | `/prepare-publishing` Propose a title, thumbnail, and description for video-002. |

The Codex definitions live in [`.agents/skills/`](.agents/skills/) and the Claude Code definitions in [`.claude/skills/`](.claude/skills/). Apply the same edits to both copies when updating a skill.

## Get a second opinion

| Subagent | Skill | Example for Codex or Claude Code |
| --- | --- | --- |
| `idea-reviewer` | `evaluate-idea` | Ask `idea-reviewer` to challenge this idea's promise and suggest a stronger angle. |
| `video-director` | `develop-video` | Ask `video-director` to prioritize scenes and assets shared by the video and the Short. |
| `long-form-specialist` | `develop-video` | Ask `long-form-specialist` whether the structure of video-002 delivers on its promise. |
| `shorts-specialist` | `develop-video` | Ask `shorts-specialist` to find a moment from video-002 that can stand alone and suggest vertical framing. |
| `visual-artist` | `document-channel`, visual-system guidance | Ask `visual-artist` for two ways to show the comparison in the opening scene. |
| `edit-reviewer` | `review-edit` | Ask `edit-reviewer` where the cut of video-002 becomes hard to follow. |

In Codex, the profile tells the subagent which skill file to read. In Claude Code, the profile preloads the skill. Name the subagent and give it an assignment. The coordinating assistant collects the recommendations and makes the edits you request.

Profiles live in [`.codex/agents/`](.codex/agents/) and [`.claude/agents/`](.claude/agents/).

## Sample production

For a video about how a fold changes the stiffness of paper, the brief can promise a comparison under the same load. Research records the test and its limits. The script opens with the comparison, and the visual plan identifies the shots needed to show it. The proposed title and thumbnail reflect what was filmed. If the comparison shot is pending, record it as the next step in the brief.

## License

The kit's original content is distributed under the [MIT license](LICENSE). Remotion and other dependencies have their own licenses.
