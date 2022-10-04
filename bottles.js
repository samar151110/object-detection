img = "";
Status = [];

function preload(){
   img = loadImage("bottles.jpg");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    object = ml5.objectDetector("cocossd", modals);
     document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoded(){
    console.log("model is loaded");
    Status = true;
}

function gotResult(error, result){
     if(error){
        console.log(error);
     }
     console.log(result);
}