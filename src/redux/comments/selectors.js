// src/redux/comments/selectors.js

export const selectComments = (state) => state.comments.comments;
export const selectCommentById = (id) => (state) => state.comments.comments.find((comment) => comment.id === id);
export const selectCommentsByUser = (userId) => (state) =>
  state.comments.comments.filter((comment) => comment.userId === userId);
export const selectCommentsCount = (state) => state.comments.comments.length;
