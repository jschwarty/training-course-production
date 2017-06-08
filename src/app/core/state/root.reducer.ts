import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
import { chaptersReducer } from './chapters.reducer';
import { courseTitleReducer } from './course-title.reducer';

export const reducers = {
  courseTitle: courseTitleReducer,
  chapters: chaptersReducer
};

export function rootReducer(state, action) {
  return compose(combineReducers)(reducers)(state, action);
}
