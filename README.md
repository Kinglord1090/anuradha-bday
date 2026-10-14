# Happy Birthday, Anuradha! 🎂

A small, responsive birthday microsite built with plain HTML, CSS, and JavaScript. No build tools or dependencies required.

## Preview locally
Open `index.html` in a browser. Internet is only needed for the optional Google Fonts; everything else is local.

## Add photos permanently (recommended for GitHub Pages)
1. Put your image files in the `images/` folder.
2. In `index.html`, you can replace the three placeholder cards in `#gallery` with image markup, for example:

```html
<div class="photo-card">
  <img src="images/anuradha-01.jpg" alt="A favourite memory with Anuradha">
  <div class="photo-label">Core memory 💗</div>
</div>
```

The in-page uploader is for temporary previews from your device; browser-selected photos are not uploaded or saved to the site.

## Publish on GitHub Pages
1. Create a GitHub repository, for example `anuradha-birthday`.
2. Upload `index.html`, `style.css`, `script.js`, and your `images/` folder to the repository root.
3. In the repo, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then click **Save**.
6. Wait for the Pages deployment. The URL will be `https://YOUR-USERNAME.github.io/anuradha-birthday/`.

For a personal homepage at `https://YOUR-USERNAME.github.io/`, create a repository named exactly `YOUR-USERNAME.github.io`. You can still host multiple separate sites: create a different repository for each project and enable Pages in each one. Those sites get URLs such as `https://YOUR-USERNAME.github.io/project-repo/`. The special `YOUR-USERNAME.github.io` repo is only needed for the root personal site, not for every project.
