import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TrainingCourseProductionAppComponent } from '../app/training-course-production.component';

beforeEachProviders(() => [TrainingCourseProductionAppComponent]);

describe('App: TrainingCourseProduction', () => {
  it('should create the app',
      inject([TrainingCourseProductionAppComponent], (app: TrainingCourseProductionAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'training-course-production works!\'',
      inject([TrainingCourseProductionAppComponent], (app: TrainingCourseProductionAppComponent) => {
    expect(app.title).toEqual('training-course-production works!');
  }));
});
