# Sajjed Hussain Qazi — Portfolio

Complete editable source for your portfolio, including your introduction video and résumé. This is a static HTML/CSS/JavaScript site: no npm install, build step, backend, or API keys are required.

## Files to edit

- `index.html`: page text, contact information, links, project sections, video element, and metadata.
- `style.css`: colours, typography, layout, animations, and mobile breakpoints. The main accent colour is `--blue` near the beginning.
- `script.js`: video playback, navigation highlighting, and the project details displayed in the dialogs. Update the `projects` object when editing project content.
- `assets/introduction.mp4`: introduction video.
- `assets/introduction-poster.jpg`: video preview image.
- `assets/Sajjed-Hussain-Qazi-Resume.pdf`: downloadable résumé.
- `.nojekyll`: tells GitHub Pages to serve these static files directly.

All local asset URLs use relative paths, so this copy works both at a main GitHub Pages domain and under a repository path such as `/portfolio/`.

## Edit and preview

1. Extract this ZIP and open the `Sajjed-Portfolio` folder in VS Code.
2. Edit the files above and save your changes.
3. Open `index.html` in a browser for a quick preview. For a local web server, run `python -m http.server 8000` in this folder and open http://localhost:8000. On Windows, you can use `py -m http.server 8000` if `python` is unavailable. Stop the server with Ctrl+C.

Google Fonts loads from the internet. If it is unavailable, the site uses its fallback fonts. Video autoplay starts muted and may be restricted by your browser; the video controls and Meet Sajjed button allow manual playback with sound.

## Publish on GitHub Pages

1. Create a public repository on GitHub. Use `portfolio` for a project site, or `Sajjedhussainqazi.github.io` for your account's main site. If that repository already exists, review and back up its existing contents before replacing anything.
2. Upload the CONTENTS of this folder to the repository root: `index.html`, `style.css`, `script.js`, the whole `assets` folder, `.nojekyll`, and this README. Do not upload only the ZIP or place everything inside an extra parent folder. Use Git, GitHub Desktop, or GitHub's Add file > Upload files flow. If your file picker hides `.nojekyll`, add an empty file with that exact name in GitHub.
3. Commit the files to the `main` branch.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select `main` and `/(root)`, then Save.
7. Wait for GitHub's deployment to complete and use the URL displayed in Pages settings.

Expected addresses for your account:
- Main site: https://sajjedhussainqazi.github.io/
- Repository named portfolio: https://sajjedhussainqazi.github.io/portfolio/

These are expected addresses, not a claim that this export has been uploaded or deployed to GitHub. This download does not change your existing ChatGPT-hosted site.

## Updating the site

Edit the source files, then commit and push your changes to the publishing branch. GitHub Pages republishes them. Keep the folder names and asset filenames consistent with `index.html`; GitHub Pages paths are case-sensitive.

To change a project, edit its visible section in `index.html` and its matching entry in the `projects` object in `script.js`. The GitHub links currently open your profile; replace them with individual repository or live demo URLs if you want direct project links.

Official publishing instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
