const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode configurar plugins, listeners de eventos, etc.
    },
  },
});
