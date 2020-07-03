var ran = [];
var input = [];
var i;
var j = 0;
var count = 0;
var wait = 2000;

var s=document.getElementById("highscore");
var localscore=s.innerHTML;
var h=localStorage.getItem("localhighScore");

//first launch ever. No previous high score
if(h===null)
{
    localStorage.setItem("localhighScore",0);

}
//find previous highscore through local storage
else   
{

    document.getElementById("highscore").innerHTML=h;
}

//if start button clicked, change red button to green only if game not already in progress
function change() {
  
    if(document.getElementById("circle").style.backgroundColor !== "green")
    {
          document.getElementById("circle").style.backgroundColor = "green";
          window.setTimeout(function() {
            addRandom();
          }, 3000);
    }
}

//generate randon number between 1 and 4 at new index in random array
function addRandom() {
  count = ran.length;
  ran[count] = (Math.floor(Math.random() * 3)) + 1;
  var i = 0;
  sequence(i);
}

//flash each index of random array so far
function sequence(i) {
  
  if (i < ran.length) {
  	num = ran[i];
  	flash(num);
    ++i;
    window.setTimeout(function() {
      sequence(i);
    }, wait);
  }
 else {
    // when flashing is finished start 5 second timer 

    window.setTimeout(function() {
      round_timeout(i);
    }, 5000);
  }
}
    
    // after 5 second timer check if round has already been completed
function round_timeout(round_num) {
  var cscore = document.getElementById("currentscore").innerHTML;
  var a = parseInt(cscore);
  if (round_num == ++a) {
    check(false);
  }
}

//make an array of every button user clicks till length of random array
function user(num) {
  var win = false;
  flash(num);

  input[j] = num;
  j++;
  if (input.length === ran.length) {
    win = true;
    check(win);
    input = [];
    j = 0;
  }
}

//check if we've won
function check(win) {
  var m;
  for (m = 0; m < ran.length; m++) {
    if (ran[m] !== input[m]) {
      win = false;
    }
  }
    //if we've won update score and increase difficulty and add new index to random
  if (win === true) {
    document.getElementById("currentscore").innerHTML++;

    var cscore = document.getElementById("currentscore").innerHTML;

    if (cscore > 9) {
      document.getElementById("digit2").innerHTML = "";
    }

    if (cscore > 4) {
      wait = 0.75 * wait;
    }
    if (cscore > 8) {
      wait = 0.75 * wait;
    }
    if (cscore > 12) {
      wait = 0.75 * wait;
    }
    window.setTimeout(function() {
      addRandom();
    }, wait);
    
         //if we've lost update highscore and local storage
  } else if (win === false) {
    score();
      localscore=document.getElementById("highscore").innerHTML;
    localStorage.setItem("localhighScore",localscore);
      
      //flash 5 times and make button red
    document.getElementById("currentscore").innerHTML = 0;
    document.getElementById("circle").style.backgroundColor = "red";
    ran = [];
      var t=0;
    fiveTime(t);
  }

}

//flash the button that's clicked by turning it white
function flash(num) {

  var el = document.getElementById("d" + num);
  el.style.backgroundColor = 'white';

  window.setTimeout(function() {
    backColor(num);
  }, 300);
}

//return the button to it's previous colour
function backColor(num) {
  var el = document.getElementById("d" + num);
  if (num === 1) {
    el.style.backgroundColor = "#63C41C";
  }
  if (num === 2) {
    el.style.backgroundColor = "#E91001";
  }
  if (num === 3) {
    el.style.backgroundColor = "#FBD24C";
  }
  if (num === 4) {
    el.style.backgroundColor = "#2E80E6";
  }

}

//update highscore if lost
function score() {
  var current = document.getElementById("currentscore");
  var high = document.getElementById("highscore");

  if (high.innerHTML < current.innerHTML) {
    high.innerHTML = current.innerHTML;
        high = high.innerHTML;
    }

    if (document.getElementById("highscore").innerHTML > 9) {
      document.getElementById("digit1").innerHTML = "";
    }
}

//flash five times if lose
function fiveTime(t)
{
    
    if(t<5){
        flash(1);
        flash(2);
        flash(3);
        flash(4);
        t++;
    
        window.setTimeout(function(){fiveTime(t);}, 1000);
    }
}