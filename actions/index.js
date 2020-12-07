//Change background color
let body = document.querySelector("body");
let blueBackgroundButton = document.querySelector("#blueBackground");
let redBackgroundButton = document.querySelector("#redBackground");
let seizureButton = document.querySelector("#seizureButton");
let stopButton = document.getElementById("stopSeizure");

let colors = ["red", "blue", "green", "yellow", "black", "white", "purple", "brown", "orange"];
let colorCount = 0;
let interval;

redBackgroundButton.addEventListener("click", function(){
    body.style.background = "red";
});

blueBackgroundButton.addEventListener("click", function(){
    body.style.background = "blue";
});

seizureButton.addEventListener("click", function(){
    stopButton.classList.remove("hide");
    seizureButton.classList.add("hide");
    interval = setInterval(function(){
        body.style.background = colors[colorCount];
        colorCount++;
        if(colorCount === colors.length){
            console.log("running");
            colorCount = 0;
        }
    }, 100);
});

stopButton.addEventListener("click", function(){
    clearInterval(interval);
    stopButton.classList.add("hide");
    seizureButton.classList.remove("hide");
    body.style.background = "white";
});

//create email address
let emailMaker = document.querySelector("#createEmail");
emailMaker.addEventListener("click", function(){
    let emailInput = document.querySelector("#nameInput");
    let output = document.querySelector("#output");
    let str = emailInput.value;

    let arr = str.split(" ");
    let email = "";
    for(let i = 0; i < arr.length; i++){
        email += arr[i];
        if(arr.length - 1 !== i){
            email += "-";
        }
    }

    output.innerText = `${email}@mail.com`;
});

//Create badgers
let badgerButton = document.querySelector("#badgerButton");
badgerButton.addEventListener("click", function(){
    let badgerCount = document.querySelector("#badgerCount").value;
    let badgerCage = document.querySelector("#badgerCage");

    while(badgerCage.children.length > 0){
        badgerCage.removeChild(badgerCage.firstChild);
    }

    for(let i = 0; i < badgerCount; i++){
        let image = document.createElement("img");
        image.src = "badger.jpeg";
        image.classList.add("badger");
        badgerCage.appendChild(image);
    }
});