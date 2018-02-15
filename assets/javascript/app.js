//  Global Variables
var time = 20;
var questions;
var answers;
var setIntervalID;
gamePlay();

//functions
function startGame() {
    //reset time


}

function gamePlay() {
    //remove button after clicked
    $(".start").on('click', function () {
                $(".start").hide();
                //question1();
                /// what did i break here?  button no longer disappears//
                //console.log(`working for ${time}
                seconds `);


});
}
//questions//
function question1() {
    setintervalId = setInterval(timeCount, 1000);


}

function timeCount() {
    //console.log('working');
    time--;
    // console.log(setIntervalID);
}




