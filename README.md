# speech-reco-extension
## Description
- Web Speech APIを使用して音声をテキストに変換する拡張機能を作りたい

### Usage

#### Install extension
- 01. put `extension`folder into [chrome extension tab](chrome://extensions).
- 02. In the site settings of the "Web Speech Recognizer", change the microphone permission to **Allow**.
- 03. (Optional) for add convenience, set `fix to toolbar` in the detailed settings.
- Click the microphone icon to start using it.

## for development
- prepared scripts is follows

### `bun install`
```sh
# for need, install bun cli by follow
# curl -fsSL https://bun.sh/install | bash && exec -l $SHELL;
cd speech-reco-extension
bun run i
```

### `bun run lint ` && `bun run dev`

- access development page from shown URL.

### `bun run build` && `bun run preview`

- access production page from shown URL.

### `bun run updateExtension`

- update `extension` files

### using a React + Vite template

- React working in Vite with HMR and some ESLint rules.
- Currently, two official plugins are available:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## References
- This content refers following contents:
  * Chrome for Developers: [Introduction to the Speech Synthesis API](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
  * mdn web docs：[Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API)
  * OpenAI: [Chat-GPT](https://chat.openai.com/) at (September 25, 2023 Version)
