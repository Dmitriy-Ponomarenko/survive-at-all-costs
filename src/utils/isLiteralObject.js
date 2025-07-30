// src/utils/isLiteralObject.js

export const isLiteralObject = a => {
  return !!a && a.constructor === Object;
};
