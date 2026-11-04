# Portfolio architecture

## Structure and ownership

```text
src/
  app/                         # Next.js routes, root layout, global defaults
    work/[slug]/page.tsx        # Server lookup, static params, 404 handling
    work/personal-projects/
    about/
    contact/
  components/
    layout/                    # SiteHeader, SiteFooter, ThemeProvider, ThemeToggle
    ui/                        # BorderBeam, PageIntro, PlaceholderPanel
  features/
    home/                      # HomePage and its hero, approach, contact sections
    work/                      # WorkPage, ProjectDetailPage, project cards and catalog
    fulton/                    # FultonPage, editorial sections, demos and demo content
    personal-projects/         # Gallery, preview, collections and lightbox hook
    about/                     # AboutPage, experience and capabilities
    contact/                   # ContactPage
    technologies/              # TechnologyGrid, TechnologyCard and technology catalog
  styles/                      # tokens.css, Layout.module.css, Utility.module.css
public/images/                 # Original project assets
docs/                          # Architecture and original Fulton asset inventory
```

Routes compose named feature pages. They contain no presentation CSS. Keep Next.js
metadata, `generateStaticParams`, parameter resolution, and `notFound()` on the
server. Fulton remains at `/work/fulton`, dispatched by the dynamic work route;
the explicit Personal Projects route remains `/work/personal-projects`.

The Work feature owns the project catalog and project cards used by both Work and
Home. Personal Projects owns its preview used on Work. Technologies owns its grid
used on Home. Feature dependencies point to these specific modules, not a barrel
export or a global component registry.

Do not create empty global hooks/lib folders. Put feature-specific hooks and data
beside their consumers; add shared modules only when a genuinely shared use arises.

## Naming and components

- React components and implementation filenames use PascalCase; each file exports
  its named component. Route adapters use Next.js-required lowercase filenames.
- Match component-specific styles to the component: `TechnologyCard.tsx` and
  `TechnologyCard.module.css`.
- Hooks use camelCase starting with `use`; data/utilities use descriptive camelCase
  filenames, such as `projectCatalog.ts` and `useGalleryLightbox.ts`.
- Types use PascalCase. Define prop types beside their component.
- Routes and new assets use descriptive kebab-case. Original Fulton export names
  are retained to preserve the existing asset inventory and URLs.
- Prefer concrete sections over highly configurable generic page components.

## CSS and design tokens

[globals.css](../src/app/globals.css) contains imports, reset rules, base typography,
and genuinely global accessibility/motion defaults.
[tokens.css](../src/styles/tokens.css) owns colors, spacing, typography, layout,
radii and transition tokens. Light mode is the root default; dark mode overrides
tokens on `:root[data-theme='dark']`. Keep the near-black dark surfaces and emerald
accent values there.

Use CSS Modules for presentation. [Layout.module.css](../src/styles/Layout.module.css)
provides the site shell and page container; [Utility.module.css](../src/styles/Utility.module.css)
provides the small existing shared vocabulary (eyebrows, text links, status dot).
Do not expand these into a component styling dump.

[FultonPage.module.css](../src/features/fulton/FultonPage.module.css) deliberately
holds the shared case-study editorial grid, typography and image layouts used by
its server-rendered sections. Each interactive demo has a separate matching CSS
Module. This keeps common section rules consistent without duplicating them.

[BorderBeam](../src/components/ui/BorderBeam.tsx) is CSS-only reusable UI.
[TechnologyCard](../src/features/technologies/components/TechnologyCard.tsx) owns the
logo effects and composes two beams. The existing six-second motion, half-phase
offset, rounded path, reduced-motion behavior, and GitHub theme filters are preserved.

## Server and client boundaries

Pages, sections, cards, images, and shared site chrome are Server Components by
default. Do not add `'use client'` to a page merely to host a client child.

Client entry points are limited to:

- ThemeProvider and ThemeToggle: persisted browser theme preference.
- FultonReveal: viewport reveal animation and reduced-motion preference.
- WorkflowMap, RoleSwitchDemo, AnnotatedDashboard: independent local demo state.
- PersonalProjectsGallery, CategoryFilter, ImageLightbox: filtering and image viewing.

[useGalleryLightbox](../src/features/personal-projects/hooks/useGalleryLightbox.ts)
owns collection/index state, wrapped navigation, Escape/arrow listeners, and scroll
locking with cleanup. It is imported by the client gallery; its own directive is
unnecessary. Filtering is derived from the selected category, not duplicated state.

The root layout retains site metadata. No client component imports server route
APIs. CSS custom properties are typed explicitly rather than asserted as
`CSSProperties`.

## Adding content

### A work project or case study

1. Add project metadata to [projectCatalog.ts](../src/features/work/data/projectCatalog.ts).
   A slug automatically participates in the existing static parameter generation.
2. Add original assets under `public/images/<project-name>/` with descriptive names.
3. For a full case study, create a feature page and meaningful colocated sections.
   Keep long-form prose readable in JSX; use data files for repeated structured content.
4. Add its explicit rendering branch to the server work route. Projects without a
   full case study retain the existing ProjectDetailPage placeholder.
5. Check cards, direct route navigation, responsive styles, themes, and 404 behavior.

### A gallery collection or technology

Add collections and dimensions to
[personalProjectCollections.ts](../src/features/personal-projects/data/personalProjectCollections.ts).
Category membership drives the existing filter. Preserve descriptive alt text and
review the three preview selections when changing collection order.

Add technology metadata to
[technologyCatalog.ts](../src/features/technologies/data/technologyCatalog.ts).
TechnologyCard handles all logos consistently; GitHub has the existing targeted
light/dark hover styling.

## Validation

```sh
npm ci
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run dev
# Or inspect an already-built production application:
npm run start
```

After each phase, compile all routes and check the changed feature. For a complete
smoke check, visit Home, Work, Fulton, Personal Projects, About, Contact, each
placeholder work route, and an unknown slug. Check desktop/mobile layouts and both
themes; toggle themes and reload; hover/focus technology logos; exercise all Fulton
workflow/role/annotation controls; test gallery filters and lightbox buttons,
keyboard wrapping, Escape, backdrop closing, and scroll restoration.

There is currently no persistent automated browser-test suite. The refactor was
checked against pre-change browser measurements at 1440px and 390px in both themes.
Remote technology icons and Google Fonts still require network access. Placeholder
contact details and unfinished case-study content intentionally remain unchanged.

## Migration reference

Before: route JSX and page CSS lived together under `app/`; all feature and shared
components were mixed in a flat `components/`; domain data lived in `lib/`.

| Previous implementation                                       | Current owner / name                                                       |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Home route + Home.module.css                                  | home/HomePage + HomeHero, HomeApproach, HomeContact                        |
| Work route + Work.module.css                                  | work/WorkPage                                                              |
| Dynamic route presentation + ProjectDetail.module.css         | work/ProjectDetailPage                                                     |
| About route + About.module.css                                | about/AboutPage + AboutExperience, AboutCapabilities                       |
| Contact route + Contact.module.css                            | contact/ContactPage                                                        |
| Personal Projects route + PersonalProjects.module.css         | personal-projects/PersonalProjectsPage                                     |
| site-header, site-footer                                      | components/layout/SiteHeader, SiteFooter                                   |
| theme-provider, theme-toggle                                  | components/layout/ThemeProvider, ThemeToggle                               |
| page-intro, placeholder-panel                                 | components/ui/PageIntro, PlaceholderPanel                                  |
| BorderBeam                                                    | components/ui/BorderBeam (CSS unchanged)                                   |
| FeaturedProject, project-card                                 | work/components/FeaturedProject, ProjectCard                               |
| TechnologyCard + homepage technology grid                     | technologies/components/TechnologyCard, TechnologyGrid                     |
| fulton-case-study + Fulton.module.css                         | fulton/FultonPage and nine editorial section components                    |
| fulton-image, fulton-reveal                                   | fulton/components/FultonImage, FultonReveal                                |
| fulton-interactions + shared interaction CSS                  | WorkflowMap, RoleSwitchDemo, AnnotatedDashboard and individual CSS Modules |
| Workflow/annotation constants                                 | fulton/data/workflowContent, dashboardAnnotations                          |
| CategoryFilter, GalleryCollection, GalleryItem, ImageLightbox | personal-projects/components/ (same component names)                       |
| PersonalProjectsGallery, PersonalProjectsPreview              | personal-projects/components/ (same component names)                       |
| Repeated lightbox navigation                                  | personal-projects/hooks/useGalleryLightbox                                 |
| lib/projects.ts                                               | work/data/projectCatalog.ts                                                |
| lib/personal-projects.ts                                      | personal-projects/data/personalProjectCollections.ts                       |
| lib/technologies.ts                                           | technologies/data/technologyCatalog.ts                                     |
| styles/variables.css                                          | styles/tokens.css (token values unchanged)                                 |

Matching CSS Modules moved alongside their components unless split as noted.
The unused, empty root HTML file was removed; Git history retains it. No original
image or PDF assets, dependencies, lockfile, design tokens, or factual content were changed.
