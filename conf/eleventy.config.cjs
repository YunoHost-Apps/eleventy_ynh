const eleventyAsciidoc = require("eleventy-plugin-asciidoc");

module.exports = async function(eleventyConfig) {
        eleventyConfig.addPlugin(eleventyAsciidoc);
        eleventyConfig.addPassthroughCopy('__DATA_DIR__/src/css/style.css');
        eleventyConfig.addWatchTarget('__DATA_DIR__/src/css/style.css');
        eleventyConfig.addPassthroughCopy('__DATA_DIR__/src/assets');
        
        return {
                dir: {
                        input: '__DATA_DIR__/src',
                        output: '__DATA_DIR__/public',
                },
        };
};
