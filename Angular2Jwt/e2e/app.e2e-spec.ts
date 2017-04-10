import { Angular2JWTPage } from './app.po';

describe('angular2-jwt App', () => {
  let page: Angular2JWTPage;

  beforeEach(() => {
    page = new Angular2JWTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
