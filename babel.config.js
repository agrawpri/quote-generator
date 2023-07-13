module.exports = function (api) {
    api.cache(true);

    const presets = [];

    // Don't do things like minification in dev for easy debugging.
    if (process.env.NODE_ENV !== 'development') {
        presets.push("@babel/preset-env");
    }

    presets.push(["@babel/preset-react", {
        "runtime": "automatic"
    }]);

    const plugins = [];

    return {
        presets,
        plugins,
    };
};
