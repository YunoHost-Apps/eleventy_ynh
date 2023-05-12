module.exports = function (eleventyConfig) {
        eleventyConfig.addPassthroughCopy("__DATA_DIR__/src/style.css");
        return {
                dir: {
                        input: "__DATA_DIR__/src",
                        output: "__DATA_DIR__/public",
                },
        };
};
