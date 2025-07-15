# Mātrkā Glyphnet

Symbolic intelligence system for dream mapping.
# Mātṛkā Dream Graph System (matrka-glyphnet)

> A local‑first, open‑source symbolic knowledge graph for recording and visualizing dreams and human meaning.

---

## 📖 Overview

Mātṛkā Dream Graph System (codename **matrka-glyphnet**) lets users capture dream entries (text, voice, sketch), auto‑tag them with symbolic metadata (entities, elements, concepts, archetypes, patterns), and explore a force‑directed graph of interconnected glyphs. Everything runs locally first—no cloud lock‑in—so you own your data and privacy.

### Core Concepts

* **DreamNodes**: JSON documents holding a single dream or event with timestamp, location, emotion, moon phase, weather, tags, media.
* **Glyphs**: Symbolic tokens (animals, plants, elements, archetypes, concepts, patterns) defined in a JSON registry (`glyphs.json`).
* **Symbolic Web**: A force‑directed graph showing relationships between glyphs and dreams, enabling semantic exploration.

---

## ⭐️ Features (MVP)

* 🎙️ **Dream Entry Form**: Capture text, voice (via whisper.cpp), and sketch (SVG canvas).
* 🌘 **Auto‑tags**: Moon phase (lune), geolocation, weather.
* ❤️ **Emotion Wheel**: Tag emotional state.
* 📊 **Semantic Graph**: Visualize glyphs & relationships with `react-force-graph`.
* 📂 **Local‑First JSON**: All data stored as JSON under `/data/` and `/assets/`, no external DB.

---

## 💻 Tech Stack

| Layer          | Tool / Library                               |
| -------------- | -------------------------------------------- |
| App Framework  | React (web) / React Native (mobile via Expo) |
| Graph Engine   | `react-force-graph-2d`                       |
| Storage        | Local filesystem / SQLite                    |
| Transcription  | `whisper.cpp`                                |
| Moon Phase     | `lune`                                       |
| Geolocation    | Browser API / React Native Geolocation       |
| Drawing Canvas | `react-sketch-canvas` / `react-native-svg`   |
| Styling        | Tailwind CSS / NativeWind                    |
| Future Sync    | IPFS / P2P (planned)                         |

---

## 📂 Folder Structure

```
matrka-glyphnet/
├── LICENSE
├── README.md
├── package.json
│
├── data/
│   ├── glyphs.json            # Symbol registry
│   └── dreamNodes/            # User dream JSON entries
│
├── assets/
│   └── glyphs/                # SVG glyph icons
│
├── src/
│   ├── components/            # React components (Graph, EntryForm, EmotionWheel)
│   ├── data/                  # Static JSON (glyphs, glossaries)
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Helpers (moon, weather, transcription)
│   └── App.jsx                # Root app
│
├── scripts/                   # Data processing & generation scripts
└── docs/                      # Design docs, API specs
```

---

## 🚀 Installation & Running

1. **Clone the repo**

   ```bash
   git clone https://github.com/conorbyrnes04/matrka-glyphnet.git
   cd matrka-glyphnet
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start in development**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

---

## 🤝 Contributing

We welcome all contributions—bug reports, feature requests, code improvements!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-cool-feature`)
3. Commit your changes (`git commit -m "feat: add my cool feature"`)
4. Push to your branch (`git push origin feature/my-cool-feature`)
5. Open a Pull Request

Please follow our [Code of Conduct](docs/CODE_OF_CONDUCT.md) and style guidelines in `docs/STYLE.md`.

---

## 📜 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

> “Each glyph is a seed of meaning—the mycelium beneath the forest of dreams.” 🌿✨
