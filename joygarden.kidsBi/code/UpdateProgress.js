var console = require('console');
var fail = require('fail');

module.exports.function = function updateProgress(quizProgress, answer, ordinal) {
  if(ordinal){
    switch (ordinal.toString()) {
      case 'First':   ordinal_answer = 0;  break;
      case 'Second':  ordinal_answer = 1;  break;
      case 'Third':   ordinal_answer = 2;  break;
      case 'Fourth':  ordinal_answer = 3;  break;
      default: ordinal_answer = -1; break;
    }
    //console.log(quizProgress.quizInfos[quizProgress.index].answer);
    //console.log(ordinal_answer)
    if (quizProgress.quizInfos[quizProgress.index].answer === ordinal_answer) {
      quizProgress.result[quizProgress.index] = 'true';
      quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
    }
  }
  else{
    var input_answer = answer.replace(/ /gi, '');
    // if (quizProgress.quizInfos[quizProgress.index].answer === answers.indexOf(answer.valueOf().toUpperCase())) {
    // quizProgress.result[quizProgress.index] = 'true';
    // quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
    if (String(quizProgress.quizInfos[quizProgress.index].options[quizProgress.quizInfos[quizProgress.index].answer]) == input_answer) {
      //exact Matching
      quizProgress.result[quizProgress.index] = 'true';
      quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
    } else if (String(quizProgress.quizInfos[quizProgress.index].options[quizProgress.quizInfos[quizProgress.index].answer]).indexOf(input_answer) !=-1) {
      //partial Matching
      quizProgress.result[quizProgress.index] = 'true';
      quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
      //console.log(quizProgress.quizInfos[quizProgress.index].options[i]);
      //console.log(answer);
    } else {
      quizProgress.quizInfos[quizProgress.index].answerResult = 'false';
    }

  }
  if (quizProgress.quizInfos.length === quizProgress.index + 1) {
    // throw fail.checkedError('Done quiz', 'Done');
    quizProgress.done = true;
    return quizProgress;
  }
  
  quizProgress.index += 1;
  return quizProgress;
}
