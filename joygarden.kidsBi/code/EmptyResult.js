module.exports.function = function emptyResult (quizProgress) {
  return quizProgress.quizInfos.map(item => false)
};
