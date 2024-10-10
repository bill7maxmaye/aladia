import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
},
    experimentalStudio : true
  },
});




// cypress.config.js
// const { defineConfig } = require("cypress");
// const { installPlugin } = require("@chromatic-com/cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       installPlugin(on, config);
//     },
//   },
// });