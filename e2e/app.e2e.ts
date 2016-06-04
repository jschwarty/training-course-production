import { TrainingCourseProductionPage } from './app.po';

describe('training-course-production App', function() {
  let page: TrainingCourseProductionPage;

  beforeEach(() => {
    page = new TrainingCourseProductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('training-course-production works!');
  });
});
