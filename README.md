# Erick Ramos — Professional Portfolio

A Next.js App Router portfolio with React components, responsive styling, email copying, a downloadable PDF résumé, and a print-friendly résumé.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js, usually http://localhost:3000. In Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is restricted.

Development and production builds use Webpack so they can run with the SWC WebAssembly fallback when Windows cannot load the native compiler. The project root is set explicitly, so a lockfile in the parent directory does not affect this app. The matching SWC WebAssembly package is included as an optional dependency.

## Add your résumé PDF

1. Place your PDF in **`dist/`** inside this project. Your current file, **`dist/ErickR.pdf`**, is supported as-is.
2. Restart `npm run dev`, or run `npm run build` for production.
3. The **Download résumé** button will download it as `Erick-Ramos-Resume.pdf`.

The `predev` and `prebuild` scripts copy your PDF into `public/resume.pdf`, which Next.js serves at `/resume.pdf`. If there are several PDFs in `dist/`, name the one you want to use `resume.pdf`; otherwise the single PDF is selected automatically. The download button remains disabled with “PDF coming soon” until a file is available. If you remove the source PDF, the next dev startup or build removes the generated public copy and disables the button again.

Use the npm commands above so the résumé synchronization runs. Adding or replacing a PDF while the development server is running requires restarting it. A published site must be rebuilt and republished after changing the PDF.

`dist/` is an input folder for your résumé, not build output. Builds preserve it. The generated `public/resume.pdf` is ignored by Git; your source PDF in `dist/` is included in the project source when added.

## Build

```sh
npm run build
```

Next.js exports the site to **`out/`**. Deploy that directory to a static host. This project uses `output: 'export'`, so `next start` is not used. Sites hosting is configured to publish `out/` through `.openai/hosting.json`.

## Edit the portfolio

- `app/page.js`: portfolio content and résumé availability.
- `app/layout.js`: document metadata and favicon.
- `app/components.js`: navigation, clipboard interaction, print button, and footer year.
- `app/resume-download.js`: PDF download and missing-file state.
- `app/globals.css`: styling, responsive layout, and print rules.
- `scripts/sync-resume.mjs`: copies the PDF before development and production builds.

Google Fonts is optional; system fonts provide a fallback. Clipboard access depends on browser permissions and a secure context. The printed résumé includes the supplied mailing address; the web page displays Plano, Texas.
