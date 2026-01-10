module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo"],
            // "nativewind/babel", // Temporarily disabled to debug startup crash
        ],
        plugins: [
            "react-native-reanimated/plugin",
        ],
    };
};
