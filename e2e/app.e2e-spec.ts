import { HAssistantClientPage } from './app.po';

describe('h-assistant-client App', () => {
  let page: HAssistantClientPage;

  beforeEach(() => {
    page = new HAssistantClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
