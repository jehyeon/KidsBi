module.exports.function = function initQuizProgress (quizInfos) {
  return {
    quizInfos: quizInfos,
    index: 0,
    done: false,
    result: quizInfos.map(quizInfo => 'false'),
  };
};
