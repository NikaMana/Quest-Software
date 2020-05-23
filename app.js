function userProgress(time){
  var start = 0;
  var time = Math.round(time*1000/100);
  var progressElement = document.getElementById('user-progess'); //элемент прогресс бара
  var progressNum = document.getElementById('progress-num');
  var intervalId=setInterval(function(){
      if (start>100) {
          clearInterval(intervalId);
          userProgressCallBack();
      }
      else {
        progressElement.value = start;
        progressNum.innerHTML = start;
      }
      start++;
  }, time);
}

function userProgressCallBack() {
  //your code
  document.querySelector('.hidden-block').style.display = 'block';
}

userProgress(10);