import { browser, by, element } from 'protractor';

export class TcpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tcp-root h1')).getText();
  }
}
