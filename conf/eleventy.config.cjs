module.exports = async function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("./src/css/");
        eleventyConfig.addWatchTarget("./src/css/");
        return {
                dir: {
                        input: "src",
                        output: "__DATA_DIR__/public",
                },
        };
};
