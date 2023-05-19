const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    experimentalStudio: true
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
