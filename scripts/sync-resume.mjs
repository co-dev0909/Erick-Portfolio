import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';

const inputDirectory = new URL('../dist/', import.meta.url);
const destination = new URL('../public/resume.pdf', import.meta.url);

await mkdir(inputDirectory, { recursive: true });
await mkdir(new URL('../public/', import.meta.url), { recursive: true });

const files = (await readdir(inputDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.pdf'))
  .map((entry) => entry.name);
const preferred = files.find((name) => name.toLowerCase() === 'resume.pdf');

if (!preferred && files.length > 1) {
  throw new Error('Multiple PDFs found in dist/. Name the résumé you want to publish resume.pdf.');
}

const filename = preferred ?? files[0];

if (filename) {
  await copyFile(new URL(encodeURIComponent(filename), inputDirectory), destination);
  console.log(`Résumé copied from dist/${filename} to public/resume.pdf.`);
} else {
  // Remove only our generated copy if the source PDF has been removed.
  await rm(destination, { force: true });
  console.log('No PDF in dist/ yet. The download button will remain disabled.');
}
