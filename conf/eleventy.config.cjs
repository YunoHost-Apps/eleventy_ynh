module.exports = async function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("__DATA_DIR__/src/css/");
        eleventyConfig.addWatchTarget("__DATA_DIR__/src/css/");
        return {
                dir: {
                        input: "__DATA_DIR__/src",
                        output: "__DATA_DIR__/public",
                },
        };
};
