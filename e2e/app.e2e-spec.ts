import { QuizAppPage } from './app.po';

describe('quiz-app App', function() {
  let page: QuizAppPage;

  beforeEach(() => {
    page = new QuizAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
