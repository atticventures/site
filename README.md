# Attic Ventures

This website is created using Jekyll and Github Pages.

### Services

- **Cloudflare:** for DNS management, CDN, and caching
- **Github:** as a shared repository for deployed site code
- **Formspree:** as an endpoint sending form submissions to email

### Technologies

- **Jekyll:** this static site is built using Jekyll, a Ruby gem that compiles the site with SCSS and Liquid templates
- **Github Pages (uses Jekyll):** for hosting the static compiled site

---

### Caching

This website is fast, because all traffic is routed through Cloudflare. Cloudflare copies site content (html, images, javascript) saves, compresses, and delivers its own version of these files.

##### If you don't see your change taking effect, Cloudflare is likely caching and serving a previous version.

1. **Verify that there are no build errors** by viewing [Github Commits](https://github.com/somegoodpixels/attic/commits/master). If there's a red dot, then there's a syntax error. The code is saved, but the site is not rebuilt, so the last successful build will display to visitors.
2. if there are no build errors, **Purge the cache** by logging into [Cloudflare](https://www.cloudflare.com/a/caching/atticventures.com), selecting the "Caching" tab, and either clicking "Purge Individual Files" (for just one URL or image) or within the adjacent dropdown "Purge Everything". You may be given a warning, but just do it.

---

### Editing Framework Code

You may receive recommendation to add a new script or change some attribute on a high-level element of the site's code. Since we're talking about structure, and not article-based content, this html and its settings is held within `_config`.

- **Layouts** `/_layouts/` - these files specify the structure of the entire html document. `raw.html` outputs raw content (like the robots.txt file), and `page.html` does everything else. If you need to edit anything structural, `page.html` is the file you'll edit.
- **Includes** `/_includes/` - these files contain reusable html used throughout the site.

---

### Editing Framework Variables

You may need to edit some phrases and settings that are used throughout the site. Your address, phone number, social handles, default seo content and email subjects are all held here.

- **Config** `/_config.yml` - yaml variables used site-wide (be careful)



