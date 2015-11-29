var audioCtx = new (window.AudioContext || window.webkitAudioContext)();


function hit_sound(freq) {
	
	oscillator = audioCtx.createOscillator();
	gainNode = audioCtx.createGain();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(audioCtx.destination);
	oscillator.frequency.value = freq;
	gainNode.gain.value = .3;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .005, 0.1); 
	oscillator.stop(audioCtx.currentTime + 1);

}

function triangle_sound(freq) {
	
	oscillator = audioCtx.createOscillator();
	oscillator.type = 'sawtooth';
	gainNode = audioCtx.createGain();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(audioCtx.destination);
	oscillator.frequency.value = freq;
	gainNode.gain.value = .1;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .008, 0.1); 
	oscillator.stop(audioCtx.currentTime + 1);

}

function flower_sound(freq) {

	oscillator = audioCtx.createOscillator();
	oscillator.type = 'square';
	gainNode = audioCtx.createGain();
	filterNode = audioCtx.createBiquadFilter();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(filterNode);
	filterNode.connect(audioCtx.destination);
	oscillator.frequency.value = 730;
	filterNode.frequency.value = 480;
	gainNode.gain.value = .4;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .009, 0.1);	
	oscillator.frequency.setTargetAtTime(0, audioCtx.currentTime + .1, 0.1);
	oscillator.stop(audioCtx.currentTime + 1);

}


function shot_sound() {

	oscillator = audioCtx.createOscillator();
	oscillator.type = 'sawtooth';
	gainNode = audioCtx.createGain();
	filterNode = audioCtx.createBiquadFilter();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(filterNode);
	filterNode.connect(audioCtx.destination);
	oscillator.frequency.value = 730;
	filterNode.frequency.value = 380;
	gainNode.gain.value = .2;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .02, 0.1);	
	oscillator.stop(audioCtx.currentTime + .02);

}

function game_over_sound() {

	oscillator = audioCtx.createOscillator();
	oscillator.type = 'sawtooth';
	gainNode = audioCtx.createGain();
	filterNode = audioCtx.createBiquadFilter();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(filterNode);
	filterNode.connect(audioCtx.destination);
	oscillator.frequency.value = 130;
	filterNode.frequency.value = 380;
	gainNode.gain.value = .4;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .1, 0.8);	
	oscillator.frequency.setTargetAtTime(30, audioCtx.currentTime + .1, .5);
	oscillator.stop(audioCtx.currentTime + 4);

}