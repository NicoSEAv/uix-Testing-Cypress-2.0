import { defineConfig } from 'cypress';

export default defineConfig({
  // TODO: usare con https://github.com/andrewmcoupe/cy-view
  defaultCommandTimeout: 15000,
  viewportWidth: 1366,
  viewportHeight: 912, // Use 980 for fullhd to take into account browser headers
  env: { isDev: false },
  video: true,
  chromeWebSecurity: false,
  experimentalSourceRewriting: true,
  modifyObstructiveCode: false,
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    specPattern: '**/*spec.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: 'output/screenshots',
    videosFolder: 'output/videos',
    testIsolation: false
  }
});
