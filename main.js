
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function webcam_on(){
    document.getElementById("text_box").innerHTML = ""
    recognition.start()
}
recognition.onresult = function run(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("text_box").innerHTML = content
    if(content == "take my selfie"){
        speak()
        Webcam.attach("#camera")
        setTimeout(function(){
            take_snapshot()
        },5000)
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
}
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
})

function take_snapshot(){
    Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = "<img src='"+data_uri+"'id='Photo' height= '250'>"
    })
}
function save(){
    link = document.getElementById("link")
    image = document.getElementById("photo").src
    link.href = image
    link.click()
}