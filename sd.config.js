const StyleDictionary = require("style-dictionary");

// Custom transform for box-shadows
StyleDictionary.registerTransform({
  name: "shadow/spreadShadow",
  type: "value",
  matcher(token) {
    return token.type === "boxShadow";
  },
  transformer: (token) => {
    const shadows = Object.values(token.value);
    const result = shadows.map(
      (shadow) =>
        `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
    );
    return result.join(",");
  }
});

// Custom transform for borderRadius
StyleDictionary.registerTransform({
  name: "border/radius",
  type: "value",
  matcher(token) {
    return token.type === "borderRadius";
  },
  transformer: (token) => {
    return `${token.value}rem`;
  }
});

module.exports = {
  source: [
    "node_modules/@forcepoint/tokens/tokens.json"
  ],
  platforms: {
    js: {
      buildPath: "./",
      files: [
        {
          destination: "tailwind-theme-preset-2.js",
          format: "javascript/module"
        }
      ]
    }
  }
};
