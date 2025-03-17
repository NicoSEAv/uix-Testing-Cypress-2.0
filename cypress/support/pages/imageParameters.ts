import { PageWithRoute } from './pages.models';
import { uix } from '@sv/testing/uix';
import { PageTitleBar } from '../components/pageTitleBar';

function buttonPageTitle(string) {
  PageTitleBar.get().getButton({ icon: string }).checkEnabled().click();
}

export class ImagesParameters implements PageWithRoute {
  readonly url = '/desk/system-images-params';

  checkImagesParameters() {
    cy.get('sv-page-title').takeEvidence('Images Parameters');
  }

  button = {
    edit: () => buttonPageTitle('.fa-pencil')
  };
}
