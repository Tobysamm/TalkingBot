const btn = document.getElementById('btn');
const text = document.getElementById('text');


const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
    message.text = text;
  }
  
  function speakText() {
    speechSynthesis.speak(message);
  }

  btn.addEventListener('click', () => {
    setTextMessage(text.value);
    speakText();
    text.value = '';
  });
  