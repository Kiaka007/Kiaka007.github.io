import markdownIt from "markdown-it";
const md = markdownIt({ html: true });
import fs from "fs";
import path from "path";

export default function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");

  // Paired shortcode that supports Markdown
  eleventyConfig.addPairedShortcode("bodyl", (content) => {
    return `<p class="body-l">${md.renderInline(content)}</p>`;
  });
  eleventyConfig.addPairedShortcode("bodys", (content) => {
    return `<p class="body-s">${md.renderInline(content)}</p>`;
  });
  eleventyConfig.addPairedShortcode("darkbronze", (content) => {
    return `<span id="color-dark-bronze">${md.renderInline(content)}</span>`;
  });
  eleventyConfig.addPairedShortcode("spacer", (content) => {
    return `<div class="spacer">${md.renderInline(content)}</div>`;
  });
  eleventyConfig.addPairedShortcode("hrdot", (content) => {
    return `<hr class="hrdot">${md.renderInline(content)}</hr>`;
  });

  //Paired Shortcode for Columns
  eleventyConfig.addPairedShortcode("artworkcol", (content) => {
    return `<article class="artwork-column">${md.render(content)}</article>`;
  });

  //Collections Portfolio
  eleventyConfig.addCollection("caseStudies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/case-studies/*.md");
  });

  //Collections Gallery
  eleventyConfig.addCollection("artworks", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/artworks/*.md");
  });

  //Collections Journal
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  //Collections Scrapbook
  eleventyConfig.addCollection("scrapbookImages", function() {
    const folder = "src/assets/images/scrapbook";
    const files = fs.readdirSync(folder);

    const images = files
      .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
      .map(img => {
        const base = img.split(".")[0];
        const metadataPath = path.join(folder, base + ".json");

        let title = "";
        if (fs.existsSync(metadataPath)) {
          const data = JSON.parse(fs.readFileSync(metadataPath));
          title = data.title || "";
        }

        return {
          src: `/assets/images/scrapbook/${img}`,
          title
        };
      });

    // Randomize order
    return images.sort(() => Math.random() - 0.5);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
