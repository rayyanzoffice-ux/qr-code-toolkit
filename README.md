# ✨ QR Code Toolkit

> A premium, privacy-first QR studio that lives entirely in your browser.

[![Deploy to GitHub Pages](https://github.com/rayyanzoffice-ux/qr-code-toolkit/actions/workflows/deploy.yml/badge.svg)](https://github.com/rayyanzoffice-ux/qr-code-toolkit/actions/workflows/deploy.yml) ![MIT License](https://img.shields.io/badge/license-MIT-c9ff59)

**[Try the live demo →](https://rayyanzoffice-ux.github.io/qr-code-toolkit/)**

![QR Code Toolkit preview](https://placehold.co/1600x900/080b14/c9ff59?text=QR+Code+Toolkit+%E2%80%94+Screenshot+Coming+Soon)

## Why you'll love it

| Feature | What you get |
| --- | --- |
| ⚡ Live generation | Every edit appears instantly, with an animated scan preview |
| 🎨 Designer controls | Five presets, custom colors, patterns, size, margin, and error correction |
| 📱 Device preview | See how your creation feels on a real phone layout |
| 📦 Flexible exports | Download crisp PNG or resolution-independent SVG |
| 🌗 Made for you | Responsive dark and light interfaces with reduced-motion support |
| 🔒 Zero-knowledge privacy | No server, account, cookies, analytics, or tracking |

## Privacy promise

Every QR code is created **locally on your device**. Your URLs, passwords, contacts, and messages never leave the browser. The app has no backend and makes no API calls.

## Supported QR types

URL · Plain text · WiFi · WhatsApp · vCard · Email · SMS · Phone call · Google Maps location · Calendar event

## Theme presets

- **Classic** — timeless black and white
- **Neon** — electric lime on deep green
- **Minimal** — quiet, clean monochrome
- **Paper** — warm, tactile editorial tones
- **Cyber** — vivid pink and violet

## Local development

Requires Node.js 20 or newer.

```bash
git clone https://github.com/rayyanzoffice-ux/qr-code-toolkit.git
cd qr-code-toolkit
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

Quality check:

```bash
npm run lint
```

## Deploy to GitHub Pages

The included GitHub Actions workflow builds and publishes automatically:

1. Fork or clone the repository.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main` or run the workflow manually.
4. The site is built with Vite's `/qr-code-toolkit/` base path and published as a Pages artifact.

For a differently named repository, update `base` in `vite.config.ts`.

## Roadmap

- [ ] Logo overlays and safe-zone guidance
- [ ] Batch QR generation
- [ ] Shareable design recipes
- [ ] More module and finder-eye shapes
- [ ] Offline-first PWA installation
- [ ] Internationalization

## Contributing

Ideas, fixes, and thoughtful design improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md), then open an issue or pull request.

## License

Released under the [MIT License](LICENSE). Build freely, and make something delightful.
