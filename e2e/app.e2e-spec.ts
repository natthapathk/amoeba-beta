import { AmoebaSRFEPage } from './app.po';

describe('amoeba-srfe App', () => {
  let page: AmoebaSRFEPage;

  beforeEach(() => {
    page = new AmoebaSRFEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
