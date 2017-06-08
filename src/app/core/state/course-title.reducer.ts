export const courseTitleReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_COURSE_TITLE':
      return action.payload;
    default:
      return state;
  }
};
