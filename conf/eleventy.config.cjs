module.exports = async function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("__INSTALL_DIR__/src/css/");
        eleventyConfig.addWatchTarget("__INSTALL_DIR__/src/css/");
        return {
                dir: {
                        input: "__INSTALL_DIR__/src",
                        output: "__DATA_DIR__/public",
                },
        };
};
