# Dashboard Production Demo

This folder is a small static snapshot of the original `dashboard-production` project. It contains only front-end assets and a few example campaigns stored in JSON files.

Open `index.html` and choose one of the demo pages. All pages share the same simplified header and sidebar menu used on the real dashboard:

- **Dashboard** – shows all campaigns with filters for direct and deal types.
- **Demand** – lists campaigns grouped by running, paused, planned and finished state.
- **Publishers** – displays a few example publishers loaded from `publishers.json`.
- **Campaign details** – open a campaign from the Dashboard or Demand tables to see all fields.
- **Publisher details** – open a publisher to view a list of its websites.
- **Add campaign** – create a new direct or deal campaign. Saved items appear on the other pages and a short confirmation is shown after saving.
- **Add publisher** – add a new publisher record. New publishers are stored locally and listed with the others.
- **Campaign wizard** – a small multi-step form.
- **Graphs** – renders example charts with Chart.js and a summary graph on the Dashboard.

Newly added items are saved in your browser's local storage so you can refresh
the demo without losing them.

All pages read their data from the JSON files in this folder so no backend is required.

The old PDF manual has been replaced with a Markdown file, `VMG Platform Manual 2018.md`, which contains the same placeholder text as the PDF. The previous `demo.zip` download has been removed, so clone the repository if you want a local copy.

Fonts are not included; copy your own WOFF files into `style/fonts` if you need them.

You can serve the demo from any static web server or directly via GitHub Pages.
