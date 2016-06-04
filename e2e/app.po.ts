export class TrainingCourseProductionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('training-course-production-app h1')).getText();
  }
}
