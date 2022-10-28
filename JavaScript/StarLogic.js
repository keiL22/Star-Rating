var starOne = document.getElementById("star-one");
var starTwo = document.getElementById("star-two");
var starThree = document.getElementById("star-three");
var starFour = document.getElementById("star-four");
var starFive = document.getElementById("star-five");

var rating = document.getElementById("rating");
rating.addEventListener("keydown", function (input) {
    if (input.key === 'Enter') {
        validate(input);
    }
});

function validate(input) {
    var text = input.target.value;
    const result = parseFloat(text);
    input.target.value = '';
    if(isNaN(text)){
        alert(text + " is not a number");
    }else if (result>100){
        alert(text + " is too large (Enter 100 or Less)");
    }else if (result<0){
        alert(text + " is too small (Enter 0 or More)");
    }else{
        percentage(result);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function delayStar(star) {
    delay(400).then(() => star.classList.add("star-on"));
}

function percentage(result){
    if(result === 0){
        removeAll();
        delay(1000);
    }
    else if(result > 0 && result < 20 ){
        removeAll();
        delayStar(starOne);
    }else if(result >= 20 && result < 40){
        removeAll();
        delayStar(starOne);
        delayStar(starTwo);
    }else if(result >= 40 && result < 60){
        removeAll();
        delayStar(starOne);
        delayStar(starTwo);
        delayStar(starThree);
    }else if(result >= 60 && result < 80){
        removeAll();
        delayStar(starOne);
        delayStar(starTwo);
        delayStar(starThree);
        delayStar(starFour);
    }else if(result <= 100){
        removeAll();
        delayStar(starOne);
        delayStar(starTwo);
        delayStar(starThree);
        delayStar(starFour);
        delayStar(starFive);
    }
}

function removeAll(){
    starOne.classList.remove("star-on");
    starTwo.classList.remove("star-on");
    starThree.classList.remove("star-on");
    starFour.classList.remove("star-on");
    starFive.classList.remove("star-on");
}