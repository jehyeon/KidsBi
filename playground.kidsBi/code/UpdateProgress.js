var console = require('console');
var fail = require('fail');

module.exports.function = function updateProgress(quizProgress, answer) {

  const answers = ['A', 'B', 'C', 'D'];
  // var new_answer = answer.replaceAll("(^\\p{Z}+|\\p{Z}+$)", "");
  var answer = String(answer).slice(0, 1);
  console.log(answer);
 
 
  if (quizProgress.quizInfos[quizProgress.index].answer === answers.indexOf(answer.valueOf().toUpperCase())) {
    quizProgress.result[quizProgress.index] = 'true';
    quizProgress.quizInfos[quizProgress.index].answerResult = 'true';

  }
  for (var i = 0; i < answers.length; i++) {
    //console.log(String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(3));
    if (String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(3) == answer) {
      //입력받은 답과 옵션에서의 답이 같으면 그 옵션의 첫번째 값(A,B,C,D)을 answer_name에 저장
      var answer_name = String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(0, 1);
    }
  }
  //answer)name의 값과 quizInfos[quizProgress.index]의 값이 같은지 확인 
  if (answers[quizProgress.quizInfos[quizProgress.index].answer] === answer_name) {
    quizProgress.result[quizProgress.index] = 'true';
    quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
    //console.log(quizProgress.result[quizProgress.index])
  }



  if (quizProgress.quizInfos.length === quizProgress.index + 1) {
    // throw fail.checkedError('Done quiz', 'Done');
    quizProgress.done = true;
    return quizProgress;
  }

  quizProgress.index += 1;
  return quizProgress;
}
