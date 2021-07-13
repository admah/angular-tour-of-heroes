import {
  browser,
  element,
  by,
  ElementArrayFinder,
  ElementFinder,
  promise,
  $
} from 'protractor';

export class BlankPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-root h1')).getText();
  }

  async searchFor(term: string): Promise<void> {
    const input = element(by.name('search-term-input')).first();
    await input.clear();
    await input.sendKeys(term);
    await element(by.id('submit-search')).first().click();
  }

  photoItemLinks(): ElementFinder {
    return element(by.className('photo-item-link'));
  }

  photoItemImages(): ElementFinder {
    return element(by.className('photo-item-image'));
  }

  photoAddButton(): ElementFinder {
    return element(by.buttonText('Add Photo'));
  }

  photoDeleteButton(): ElementFinder {
    return element(by.buttonText('Delete Photo'));
  }

  fullPhotoText(): promise.Promise<string> {
    return element(by.id('full-photo')).getText();
  }

  fullPhotoTitle(): promise.Promise<string> {
    return element(by.tagName('h1')).getText();
  }

  public fullPhotoTags(): promise.Promise<string> {
    return $('full-photo-tags').getText();
  }

  public fullPhotoImage(): ElementFinder {
    return element(by.id('full-photo-image'));
  }
}
