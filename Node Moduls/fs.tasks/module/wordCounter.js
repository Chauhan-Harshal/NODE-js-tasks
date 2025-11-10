exports.countWords = (text) => {
  return text.trim().split(/\s+/).length;
};