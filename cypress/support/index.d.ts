declare namespace Cypress {
  interface Chainable {
    /**
     * Takes a snapshot of the whole screen for UIX validation purposes.
     *
     * The command returns a Chainable of the whole screen, and should only be chained if there is
     * the need to proceed further with a find.
     * It will NOT return the same element that was previously the subject of the chainable.
     *
     * @param fileName   The optional file name for the screenshot.
     */
    takeEvidence(fileName?: string): Chainable;
  }
}
