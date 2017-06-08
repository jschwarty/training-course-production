import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from './core/state/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  courseTitle: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.courseTitle = this.store.select((state: AppState) => state.courseTitle);
  }

  updateCourseTitle(title) {
    this.store.dispatch({
      type: 'UPDATE_COURSE_TITLE',
      payload: title
    });
  }
}
