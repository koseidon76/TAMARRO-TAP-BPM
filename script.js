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

    body.classList.add('leopard');
    setTimeout(() => {
        body.classList.remove('leopard');
    }, 100);

    bpmDisplay.classList.add('jump');
    setTimeout(() => {
        bpmDisplay.classList.remove('jump');
    }, 100);

    if (tapTimes.length > 0) {
        const timeDiff = now - tapTimes[tapTimes.length - 1];
        if (timeDiff > 5000) tapTimes = [];
    }

    tapTimes.push(now);

    if (tapTimes.length > 1) {
        const intervals = [];
        for (let i = 1; i < tapTimes.length; i++) {
            intervals.push(tapTimes[i] - tapTimes[i - 1]);
        }
        const avg = intervals.reduce((a,b) => a + b) / intervals.length;
        const bpm = Math.round(60000 / avg);
        bpmDisplay.textContent = bpm;
        lastBpm = bpm;
        lastBpmSpan.textContent = bpm;
    }

    tapCountSpan.textContent = tapTimes.length;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        tapTimes = [];
        tapCountSpan.textContent = '0';
        bpmDisplay.textContent = lastBpm;
    }, 5000);
}

tapButton.addEventListener('click', calculateBPM);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.repeat) {
        e.preventDefault();
        calculateBPM();
    }
});
