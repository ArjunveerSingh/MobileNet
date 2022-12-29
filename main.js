function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet', ml);
}
pr="";
function ml(){
  console.log("Model Loaded!");
}
function draw(){
  image(video,0,0,300,300);
classifier.classify(video,gr);
}
function gr(error,results){
if(error){
  console.error(error);
}
else{
if((results[0].confidence>0.5)&&(pr !=results[0].label)){
  console.log(results);
  pr=results[0].label;
  synth= window.SpeechSynthesis;
  ut= "Object detected is"+pr;
  speak=new SpeechSynthesisUtterance(ut);
  synth.speak(speak);
  document.getElementById("object").innerHTML="Object:"+pr;
  documenht.getElementById("accuracy").innerHTML="Accuracy:"+results[0].confidence.toFixed(2);
}
}
}
