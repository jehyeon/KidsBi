var console = require('console');
var fail = require('fail');

module.exports.function = function updateProgress(quizProgress, answer, ordinal) {

  if(ordinal){
    switch (ordinal.toString()) {
      case 'First':   answer = quizProgress.quizInfos[quizProgress.index].options[0];  break;
      case 'Second':  answer = quizProgress.quizInfos[quizProgress.index].options[1];  break;
      case 'Third':   answer = quizProgress.quizInfos[quizProgress.index].options[2];  break;
      case 'Fourth':  answer = quizProgress.quizInfos[quizProgress.index].options[3];  break;
      default: answer = quizProgress.quizInfos[quizProgress.index].options[0]; break;
    }
  }
  const answers = ['A', 'B', 'C', 'D'];
  var answer= answer.replace(/ /gi, '');
  for (var i = 0; i < answers.length; i++) {
    //console.log(String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(2));
    if (String(quizProgress.quizInfos[quizProgress.index].options[i]) == answer) {
      //입력받은 답과 옵션에서의 답이 같으면 그 옵션의 첫번째 값(A,B,C,D)을 answer_name에 저장
        quizProgress.result[quizProgress.index] = 'true';
        quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
        console.log(quizProgress.quizInfos[quizProgress.index].options[i]);
        console.log(answer);
      }
    else if (String(quizProgress.quizInfos[quizProgress.index].options[i]).indexOf(answer) !=-1) {
        quizProgress.result[quizProgress.index] = 'true';
        quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
        console.log(quizProgress.quizInfos[quizProgress.index].options[i]);
        console.log(answer);
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
