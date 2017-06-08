import { TcpPage } from './app.po';

describe('tcp App', () => {
  let page: TcpPage;

  beforeEach(() => {
    page = new TcpPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to tcp!!'))
      .then(done, done.fail);
  });
});
