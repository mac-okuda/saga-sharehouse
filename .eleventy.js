module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addCollection("information", function(collection) {
    return collection.getFilteredByGlob("src/information/*.md");
  });
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("src/blog/*.md");
  });
  eleventyConfig.addCollection("works", function(collection) {
    return collection.getFilteredByGlob("src/works/*.md");
  });
  eleventyConfig.addFilter("readableDate", dateObj => {
    let YYYY = dateObj.getFullYear();
    let M = dateObj.getMonth() + 1;
    let D = dateObj.getDate();
    return `${YYYY}/${M}/${D}`;
  });
  return {
    dir: {
      input: "src",
    }
  };
};