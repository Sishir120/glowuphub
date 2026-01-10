const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Nativewind temporarily disabled to debug startup crash
// const { withNativeWind } = require("nativewind/metro-config");
// module.exports = withNativeWind(config, { input: "./global.css" });

module.exports = config;
