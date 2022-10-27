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
    if(isNaN(text)){
        alert(text + " is not a number");
        input.target.value = '';
    }
    else{
        const result = parseFloat(text);
        input.target.value = '';
        percentage(result);
    }
}

function percentage(result){
    if(result === 40){
        starOne.classList.add("star-on");
        starOne.classList.remove("star-off");
    }else{
        starOne.classList.add("star-off");
        starOne.classList.remove("star-on");
    }
}