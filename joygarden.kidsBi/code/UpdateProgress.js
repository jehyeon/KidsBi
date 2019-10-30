var console = require('console');
var fail = require('fail');

module.exports.function = function updateProgress(quizProgress, answer, ordinal) {

  // if(ordinal){
  //   console.log("teeeeest")
  // }
  const answers = ['A', 'B', 'C', 'D'];
  var answer= answer.replace(/ /gi, '');
  //A,B,C,D or a,b,c,d 일 경우
  if (answer.length <= 1) {
    console.log(quizProgress.quizInfos[quizProgress.index].answer);
    console.log(answers.indexOf(answer.valueOf().toUpperCase()));
    if (quizProgress.quizInfos[quizProgress.index].answer === answers.indexOf(answer.valueOf().toUpperCase())) {
      quizProgress.result[quizProgress.index] = 'true';
      quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
    }
  }
  //답을 직접 받아오는 경우
  else if (answer.indexOf(':') == -1) {
    for (var i = 0; i < answers.length; i++) {
      console.log(String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(2));
      if (String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(2) == answer) {
        //입력받은 답과 옵션에서의 답이 같으면 그 옵션의 첫번째 값(A,B,C,D)을 answer_name에 저장
        var answer_name = String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(0, 1);
        console.log(answer_name);
      }
    }
    //answer)name의 값과 quizInfos[quizProgress.index]의 값이 같은지 확인 
    if (answers[quizProgress.quizInfos[quizProgress.index].answer] === answer_name) {
      quizProgress.result[quizProgress.index] = 'true';
      quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
      //console.log(quizProgress.result[quizProgress.index])
    }
  }
  //intet인 값을 받아오는 경우
  else {
    for (var i = 0; i < answers.length; i++) {
      var answer = String(answer).slice(0, 1); 
      console.log(String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(0,1));
      if (String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(0,1) == answer) {
        //입력받은 답과 옵션에서의 답이 같으면 그 옵션의 첫번째 값(A,B,C,D)을 answer_name에 저장
        var answer_name = String(quizProgress.quizInfos[quizProgress.index].options[i]).slice(0, 1);
        console.log(answer_name);
      }

    }
    if (answers[quizProgress.quizInfos[quizProgress.index].answer] === answer_name) {
      quizProgress.result[quizProgress.index] = 'true';
      quizProgress.quizInfos[quizProgress.index].answerResult = 'true';
      //console.log(quizProgress.result[quizProgress.index])
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
