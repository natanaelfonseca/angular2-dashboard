import { browser, element, by } from 'protractor';

export class Dashboardang2Page {
  navigateTo() {
    return browser.get('/');
  }

  getLoginForm() {
    return element(by.id('formlogin'));
  }
}
