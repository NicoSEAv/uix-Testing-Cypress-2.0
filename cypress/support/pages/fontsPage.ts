import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';
import { PreviewHeader } from '../components/previewHeader';

function buttonPreview(string) {
  PreviewHeader.get().getButton({ icon: string }).click();
}
function buttonTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).click();
  return cy.get('.page-title-bar');
}
function selectSection(string) {
  cy.get('.mat-mdc-tab-labels .mdc-tab__content .mdc-tab__text-label').contains(string).click();
  return cy.get('.page-title-bar');
}
function learnFromImage(string) {
  cy.get('.viewer-toolbar sv-button .action-button-wrapper').find(string).click();
}

export class FontsPage implements PageWithRoute {
  readonly url = '/desk/fonts';

  /**
   * It allows to check the title of the page and the buttons on the Navigation Bar
   * @returns: used in order to chain this command with .takeEvidence()
   */
  checkFontsPage() {
    cy.get('sv-page-title').find('.main-title');

    uix.navBar.deskModule.notActiveWindowsManagement();
    uix.navBar.deskModule.notActiveCodes();
    uix.navBar.deskModule.activeFonts();
    uix.navBar.deskModule.notActiveProgrmmableMeasrue();

    return cy.get('sv-page-title').find('.main-title');
  }

  button = {
    edit: () => buttonPreview('.fa-pencil'),
    copy: () => buttonPreview('.fa-copy'),
    delete: () => buttonPreview('.fa-trash'),
    linkedWindows(name) {
      cy.get('sv-grid table tr td').contains(name).parent().parent().parent().find('td sv-button').click();
    },
    createNew: () => buttonTitle('.fa-file-plus'),
    exit: () => buttonTitle('.fa-sign-out-alt'),
    save: () => buttonTitle('.fa-save'),
    redo: () => buttonTitle('.fa-redo'),
    undo: () => buttonTitle('.fa-undo'),
    discard: () => buttonTitle('.fa-times'),
    drawModel: () => buttonTitle('.fa-draw-polygon'),
    //bottom buttons for the characters learning
    learnCharacters() {
      cy.get('.char-list-wrapper sv-button .action-button-wrapper .fa-graduation-cap').click();
    },
    addCharacter() {
      cy.get('.char-list-wrapper sv-button .action-button-wrapper .fa-plus').click();
    },
    //camera buttons during the mode 'Learn from Image'
    snapshot: () => learnFromImage('.fa-camera-polaroid'),
    select: () => learnFromImage('.fa-rectangle'),
    move: () => learnFromImage('.fa-hand'),
    image: () => learnFromImage('.fa-image'),
    zoomIn: () => learnFromImage('.fa-search-plus'),
    zoomOut: () => learnFromImage('.fa-search-minus'),
    assignCharacter() {
      cy.get('sv-font-learning-segmentation-list sv-button.assign-btn').click();
      return cy.get('.page-title-bar');
    },
    crosscheck: () => buttonTitle('.fa-spell-check')
  };

  section = {
    character: () => selectSection('Character'),
    map: () => selectSection('Map'),
    parameters: () => selectSection('Parameters'),
    tolerances: () => selectSection('Checks & Tolerances'),
    //------- Variazioni comandi a seconda della lingua in uso
    characterDE: () => selectSection('Zeichen'),
    mapDE: () => selectSection('Karte'),
    parametersDE: () => selectSection('Parameter'),
    tolerancesDE: () => selectSection('Kontrollen und Toleranzen'),
    charactersES: () => selectSection('Caracteres'),
    mapES: () => selectSection('Mapa'),
    parametersES: () => selectSection('Parámetros'),
    tolerancesES: () => selectSection('Controles y Tolerancias'),
    characterFR: () => selectSection('Caractères'),
    mapFR: () => selectSection('Carte'),
    parametersFR: () => selectSection('Paramètres'),
    tolerancesFR: () => selectSection('Contrôles et tolérances'),
    characterIT: () => selectSection('Caratteri'),
    mapIT: () => selectSection('Mappa'),
    parametersIT: () => selectSection('Parametri'),
    tolerancesIT: () => selectSection('Controlli & Tolleranze'),
    characterNL: () => selectSection('Tekens'),
    mapNL: () => selectSection('Overzicht'),
    parametersNL: () => selectSection('Parameters'),
    tolerancesNL: () => selectSection('Controles & Toleranties')
  };

  /**
   * It allows to draw the rectangle to learn the characters taking as input the coordinates of the first click and of the release click.
   */
  learnDraw() {
    cy.get('.content-wrapper')
      .realHover({ pointer: 'mouse' })
      .realMouseDown({ x: 181, y: 195 })
      .realMouseUp({ x: 344, y: 219 });
  }
}
