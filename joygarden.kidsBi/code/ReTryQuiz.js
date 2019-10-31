var fail = require('fail');

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

module.exports.function = function reTryQuiz (quizProgress) {
  if (quizProgress.result.filter(item => item == 'false').length == 0) {
    throw fail.checkedError('No fail quiz', 'NoQuizinfos');
  }

  if (quizProgress.done.valueOf() === true) {
    const remainQuizProgress = quizProgress;
    // Reset done, index
    remainQuizProgress.done = false;
    remainQuizProgress.index = 0;

    const updatedResult = remainQuizProgress.result.map(result => {
      if (result == 'false') {
        return result;
      } else {
        return undefined;
      }
    }).filter(item => {
      if (item != undefined) {
        return item;
      }
    });

    const updatedQuizInfos = remainQuizProgress.quizInfos.map(quizInfo => {
      if (quizInfo.answerResult == 'false') {
        return quizInfo;
      } else {
        // answerResult == 'true
        return undefined; 
      }
    }).filter(item => {
      if (item != undefined) {
        return item;
      }
    });

    remainQuizProgress.quizInfos = updatedQuizInfos;
    remainQuizProgress.result = updatedResult;

    // Shuffle quizInfos
    remainQuizProgress.quizInfos = shuffle(remainQuizProgress.quizInfos)

    return remainQuizProgress;
  }

  return quizProgress
}
