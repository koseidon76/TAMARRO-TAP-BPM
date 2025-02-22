const tapButton = document.getElementById('tapButton');
const bpmDisplay = document.getElementById('bpmDisplay');
const lastBpmSpan = document.getElementById('lastBpm');
const tapCountSpan = document.getElementById('tapCount');
const body = document.body;

let tapTimes = [];
let timeoutId;
let lastBpm = 0;

function calculateBPM() {
    const now = performance.now();

    // Cambio sfondo temporaneo
    body.classList.add('leopard'); // o 'zebra', a seconda del tuo design
    setTimeout(() => {
        body.classList.remove('leopard'); // Ripristina lo sfondo
    }, 100); // Durata del cambio sfondo (100ms)

    bpmDisplay.classList.add('jump');
    setTimeout(() => {
        bpmDisplay.classList.remove('jump');
    }, 100);

    // ... (resto della funzione calculateBPM rimane invariato)
}

// ... (resto del codice JavaScript rimane invariato)
