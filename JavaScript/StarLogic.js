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
    }else{
        percentage(result);
    }
}

function percentage(result){
    if(result < 20){
        starOne.classList.add("star-on");

        starTwo.classList.remove("star-on");
        starThree.classList.remove("star-on");
        starFour.classList.remove("star-on");
        starFive.classList.remove("star-on");
    }else if(result >= 20 && result < 40){
        starTwo.classList.add("star-on");
        starOne.classList.add("star-on");

        starThree.classList.remove("star-on");
        starFour.classList.remove("star-on");
        starFive.classList.remove("star-on");
    }else if(result >= 40 && result < 60){
        starTwo.classList.add("star-on");
        starOne.classList.add("star-on");
        starThree.classList.add("star-on");

        starFour.classList.remove("star-on");
        starFive.classList.remove("star-on");
    }else if(result >= 60 && result < 80){
        starTwo.classList.add("star-on");
        starOne.classList.add("star-on");
        starThree.classList.add("star-on");
        starFour.classList.add("star-on");

        starFive.classList.remove("star-on");
    }else if(result <= 100){
        starTwo.classList.add("star-on");
        starOne.classList.add("star-on");
        starThree.classList.add("star-on");
        starFour.classList.add("star-on");
        starFive.classList.add("star-on");
    }
}