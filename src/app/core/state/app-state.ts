export interface AppState {
  courseTitle: string;
  chapters: Chapter[];
}

export interface Chapter {
  name: string;
  videos: Video[];
}

export interface Video {
  name: string;
  script: string;
}
