import { Chapter, Video } from './app-state';

export const chaptersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHAPTERS':
      return [
        ...state,
        ...action.payload.map(videoCount => {
          return <Chapter>{
            name: `Chapter`,
            videos: Array.apply(null, {length: +videoCount}).map(_ => {
              return <Video>{
                name: `Video`,
                script: ''
              }
            })
          };
        })
      ];
    case 'DELETE_CHAPTER':
      return [...state.filter(chapter => chapter !== action.payload)];
    case 'UPDATE_CHAPTER_NAME':
      return [
        ...state.map(chapter => {
          return chapter !== action.payload.chapter
            ? chapter
            : {...chapter, name: action.payload.name};
        })
      ];
    case 'UPDATE_VIDEO_NAME':
      return [
        ...state.map(chapter => {
          return chapter !== action.payload.chapter
            ? chapter
            : {
              ...chapter,
              videos: chapter.videos.map(video => {
                return video !== action.payload.video
                  ? video
                  : {...video, name: action.payload.name};
              })
            };
        })
      ];
    case 'DELETE_VIDEO':
      return [
        ...state.map(chapter => {
          return chapter !== action.payload.chapter
            ? chapter
            : {
              ...chapter,
              videos: chapter.videos.filter(video => video !== action.payload.video)
            };
        })
      ];
    default:
      return state;
  }
};
