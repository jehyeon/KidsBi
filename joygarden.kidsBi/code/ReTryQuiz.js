var console = require('console');

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
  if (quizProgress.done.valueOf() === true) {
    const remainQuizProgress = quizProgress;
    // Reset done, index
    remainQuizProgress.done = false;
    remainQuizProgress.index = 0;

    // Remove result == 'true' acse
    for (index in remainQuizProgress.result) {
      if (remainQuizProgress.result[index] == 'true') {
        remainQuizProgress.result.splice(index, 1)
        remainQuizProgress.quizInfos.splice(index, 1)
      }
    }

    // Shuffle quizInfos
    remainQuizProgress.quizInfos = shuffle(remainQuizProgress.quizInfos)
    return remainQuizProgress;
  }

  return quizProgress
}
