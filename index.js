let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let homeScoreCount = 0;
let guestScoreCount = 0;

function increase(){
  
    homeScoreCount =  homeScoreCount + 1;
    homeScore.innerText =  homeScoreCount;
    // console.log("button clicked")

}

function increaseByTwo(){
  
    homeScoreCount =  homeScoreCount + 2;
    homeScore.innerText =  homeScoreCount;
    // console.log("button clicked")

}

function increaseByThree(){
  
    homeScoreCount =  homeScoreCount + 3;
    homeScore.innerText =  homeScoreCount;
    // console.log("button clicked")

}

// increase()

function increaseHome(){
  
    guestScoreCount =   guestScoreCount  + 1;
    guestScore.innerText = guestScoreCount;
    // console.log("button clicked")

}

function increaseByTwoHome(){
  
    guestScoreCount =   guestScoreCount  + 2;
    guestScore.innerText = guestScoreCount;
    // console.log("button clicked")

}

function increaseByThreeHome(){
  
    guestScoreCount =   guestScoreCount  + 3;
    guestScore.innerText = guestScoreCount;
    // console.log("button clicked")

}