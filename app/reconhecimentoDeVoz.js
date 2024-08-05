const elementoChute =  document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute  = e.results[0][0].transcript
    exibeChuteNatela(chute)
    verifica(chute)
}

function exibeChuteNatela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <spam class="box"> ${chute} </spam>`
}

recognition.addEventListener('end', ()=> {
    recognition.start()
})

