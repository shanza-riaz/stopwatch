var min = 0;
var sec = 0;
var milisec = 0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var miliheading = document.getElementById("mili");
var interval;


function timer(){
   milisec++;
  miliheading.innerHTML = milisec;
  if(milisec >= 100){
      sec++;
      secheading.innerHTML = sec;
      milisec=0;
  }

else if(sec >= 60){
    min++;
    minheading.innerHTML = min;
    sec=0;
}
}
function start(){
    clearInterval(interval);
interval = setInterval(timer,10);
}


function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    milisec = 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    miliheading.innerHTML = milisec;
    stop();
}