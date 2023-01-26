function preload(){
    lips=loadImage("lips-removebg-preview.png")
}


nose_x=0
nose_y=0


function setup(){
    canvas=createCanvas(500,500)
    video=createCapture(VIDEO)
video.hide()
poseNet=ml5.poseNet(video, model_loaded)
poseNet.on('pose',gotPoses)
}


function model_loaded(){
    console.log("Model is loaded")
}


function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        nose_x=results[0].pose.nose.x-110
        nose_y=results[0].pose.nose.y+30
    }
}


function draw(){
    image(video,0,0,500,500)
    image(lips,nose_x,nose_y,60,60)
}