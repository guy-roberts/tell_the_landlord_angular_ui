import { AdministrationUiPage } from './app.po';

describe('administration-ui App', function() {
  let page: AdministrationUiPage;

  beforeEach(() => {
    page = new AdministrationUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
