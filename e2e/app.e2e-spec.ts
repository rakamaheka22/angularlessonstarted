import { AngularlessonstartedPage } from './app.po';

describe('angularlessonstarted App', () => {
  let page: AngularlessonstartedPage;

  beforeEach(() => {
    page = new AngularlessonstartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
