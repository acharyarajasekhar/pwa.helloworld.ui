import { SvnArticlesPage } from './app.po';

describe('svn-articles App', () => {
  let page: SvnArticlesPage;

  beforeEach(() => {
    page = new SvnArticlesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
