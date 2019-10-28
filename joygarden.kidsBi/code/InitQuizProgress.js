module.exports.function = function initQuizProgress (quizInfos) {
  return {
    quizInfos: quizInfos,
    index: 0,
    done: false,
  };
};
