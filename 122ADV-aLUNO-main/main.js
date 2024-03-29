const lblStatus = document.getElementById("status");
const canvasW = 900;
const canvasH = 600;

var x = 0;
var y = 0;

var shape = "";

var SpeechRecognition = webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    lblStatus.innerHTML = "O sistema está te ouvindo, pode hablar agora";
    recognition.start();
}

recognition.onresult = (e) => {
    lblStatus.innerHTML = "";

    console.log(e);

    const resultado = e.results[0][0].transcript;
    console.log(resultado);

    randomCoords();
    lblStatus.innerHTML = "Desenhando um ";
    lblStatus.innerHTML += resultado;
    shape = resultado;
}

function ramdomCoords() {
    x = Math.floor(Math.ramdom() * canvasW);
    y = Math.floor(Math.ramdom() * canvasH);
}

function setup() {
    createCanvas(canvasW, canvasH);
}

function draw() {
    switch (shape) {
        case "círculo":
            const raio = Math.floor(Math.random() * (100 - 10)) + 10;
            circle(x, y, raio);
            break;
        case " retângulo":
            const w = Math.floor(Math.ramdom()*(  50 - 10)) + 10;
            const h = Math.floor(Math.ramdom()*(  50 - 10)) + 10;
            rect(x, y, w, h);
            break;
    }
    shape = "";
}