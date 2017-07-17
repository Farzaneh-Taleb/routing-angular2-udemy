import { CompleteQuideFinalWebpackPage } from './app.po';

describe('complete-quide-final-webpack App', function() {
  let page: CompleteQuideFinalWebpackPage;

  beforeEach(() => {
    page = new CompleteQuideFinalWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
