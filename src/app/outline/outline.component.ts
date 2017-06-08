import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Chapter } from '../core/state/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tcp-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineComponent implements OnInit {
  chapters: Observable<Chapter[]>;

  constructor(private store: Store<AppState>) {
    this.chapters = this.store.select((state: AppState) => state.chapters);
  }

  ngOnInit() {
  }

  addChapters(chapters) {
    this.store.dispatch({
      type: 'ADD_CHAPTERS',
      payload: chapters.split(',').map(i => i.trim())
    });
  }

  updateChapterName(chapter, name) {
    if (chapter.name !== name) {
      this.store.dispatch({
        type: 'UPDATE_CHAPTER_NAME',
        payload: {chapter, name}
      });
    }
  }

  deleteChapter(chapter) {
    this.store.dispatch({
      type: 'DELETE_CHAPTER',
      payload: chapter
    });
  }

  updateVideoName(chapter, video, name) {
    if (video.name !== name) {
      this.store.dispatch({
        type: 'UPDATE_VIDEO_NAME',
        payload: {chapter, video, name}
      });
    }
  }

  deleteVideo(chapter, video) {
    this.store.dispatch({
      type: 'DELETE_VIDEO',
      payload: {chapter, video}
    });
  }
}
