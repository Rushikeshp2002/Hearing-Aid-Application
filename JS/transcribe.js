function setup() {
    noCanvas();
    
}

var btnEl = document.getElementById("btn")

btnEl.addEventListener('click',function(){
    let lang = navigator.language || 'en-US';
    let speechRec = new p5.SpeechRec(lang, gotSpeech);
  
    let continuous = true;
    let interim = false;
    speechRec.start(continuous, interim);
    let text = document.getElementById("text")
  
    function gotSpeech() {
      
        text.textContent += " " + speechRec.resultString;
      
      }
})