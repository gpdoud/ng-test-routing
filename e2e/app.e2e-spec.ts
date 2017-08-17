import { NgTestRoutingPage } from './app.po';

describe('ng-test-routing App', () => {
  let page: NgTestRoutingPage;

  beforeEach(() => {
    page = new NgTestRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
