Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    image_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        console.log(data_uri);
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri+'"/>';
    });
}
console.log("ml5 version", ml5.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/T8VdAadUl/model.json',modelLoaded);