var console = require('console');
var fail = require('fail');

module.exports.function = function updateProgress (quizProgress, answer) {
  const answers = ['A', 'B', 'C', 'D'];

  if (quizProgress.quizInfos[quizProgress.index].answer === answers.indexOf(answer.valueOf())) {
    quizProgress.result[quizProgress.index] = 'true';
  }

  if (quizProgress.quizInfos.length === quizProgress.index + 1) {
    // throw fail.checkedError('Done quiz', 'Done');
    quizProgress.done = true;
    return quizProgress;
  }
  
  quizProgress.index += 1;
  return quizProgress;
}
