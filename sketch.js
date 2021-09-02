let classifier;
let labels = ['mobile','tv'];
preLoad();
// Initialize the Image Classifier method with your // Custom  model
function preLoad() {
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8UcEEBcDB/", modelLoaded);
}
function modelLoaded() {
console.log('Model Loaded!');
}
// predict the result after uploaded
function detectImage() {
var reader = new FileReader();
reader.onload = function () {
var output = document.getElementById('output_image');
output.src = reader.result;
classifier.classify(document.getElementById('output_image'), getResult);
}
reader.readAsDataURL(event.target.files[0]);
}
// result callback function
function getResult(results) {
alert(JSON.stringify(results));
        alert("Predicted is :", labels[results[0].label]);
}
