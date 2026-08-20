# Rizky Bakti Caturraga — Environmental Portfolio

This is a static React, TypeScript, Vite, and Tailwind portfolio designed to be hosted on GitHub Pages or the built-in project hosting. It has no backend, database, CMS, or authentication dependency.

## Local development

Install dependencies with `pnpm install`, then run `pnpm dev`. Generate a production build with `pnpm build`. Type-check the project with `pnpm check`.

## Editing portfolio content

The primary published content is centralized in `client/src/data/portfolio.ts`. Update the `profile`, `experience`, `projects`, `skillGroups`, `certifications`, `achievements`, `recognition`, or `leadership` exports without editing UI components. The exported `Project` type is the schema for every new project record. Every project should have a unique `slug`, a factual summary, a transparent result statement, and a suitable `visual` key.

To add a project, add one record to `projects` in `client/src/data/portfolio.ts`, retain the `Project` schema, and ensure the slug contains only URL-safe lowercase characters and hyphens. The project grid and `/projects/:slug` route will render it automatically. Do not publish undisclosed project results, client information, or invented outcomes.

## Adding field notes

Create a new Markdown file under `content/notes/` from `field-note-template.md`. The template is intentionally not rendered as a public article. When a note is ready for public release, add its approved metadata to the field-note data source in `client/src/data/portfolio.ts`; the current interface truthfully marks the archive as awaiting publication rather than displaying invented articles.

## Images and documents

The downloadable CV is referenced through managed static storage. For new visual assets, keep original files outside the project in `/home/ubuntu/webdev-static-assets/`, upload them with `manus-upload-file --webdev`, and use the returned `/manus-storage/...` URL in the relevant data record or component. Do not add large image or PDF files inside `client/public` or `client/src`.

## Contact information

Update `profile.email`, `profile.phone`, `profile.linkedin`, and `profile.location` in `client/src/data/portfolio.ts`. The footer and contact terminal update automatically.

## GitHub Pages deployment

This project uses client-side routes with hash navigation for primary portfolio sections and direct project routes. For GitHub Pages, set the Vite `base` value to the repository path before building, for example `base: "/repository-name/"`. Then run the following commands:

```bash
git add .
git commit -m "Publish portfolio update"
git push
```

Configure the GitHub Pages workflow to publish the generated `dist/public` directory. If hosting at the root `https://USERNAME.github.io/`, use `base: "/"`; otherwise use the repository pathname including leading and trailing slash.

## Visual system

The experience follows a **Swiss Industrial Print** system: documentation-paper background, carbon-black structural rules, aviation-red operational markers, visible grids, square geometry, and asymmetrical content rails. Maintain this system when adding future content or visual assets.
