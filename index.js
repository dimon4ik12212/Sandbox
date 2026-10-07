const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const ResultElement = document.getElementById("ResultElement")
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if (age >= 100){
        ResultElement.textContent = "You are so old!"
    }
    else if (age == 0){
        ResultElement.textContent = "You were just born"
    }
    else if (age >= 18){
        console.log("You are an adult")
        ResultElement.textContent = "You are an adult"
    }
    else if (age < 0){
        ResultElement.textContent = "Do not enter a negative number!"
    }
    else{
        ResultElement.textContent = "You are a child/teenager"
    }
}

