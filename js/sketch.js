var mic;
var song;
var fft;
var mode;

var w;
var band = 16;
lissage = 0.9;

function preload() {
	song = loadSound('mp3/kids.mp3');
}

function setup() {
	createCanvas(1, 1);

	mode = "microphone"; // microphone ou mp3

	if (mode == "microphone") {
		mic = new p5.AudioIn();
		mic.start();
		fft = new p5.FFT(lissage, band);
		fft.setInput(mic);
	} else if (mode == "mp3") {
		song.play();
		fft = new p5.FFT(lissage, band);
		w = width / band;
	}

	var cube_1 = select('#cube_1');

}

function draw() {

	var spectrum = fft.analyze();

	range_1 = (spectrum[0] + spectrum[1] + spectrum[2] + spectrum[3]) / 4;
	range_2 = (spectrum[4] + spectrum[5] + spectrum[6] + spectrum[7]) / 4;
	range_3 = (spectrum[8] + spectrum[9] + spectrum[10] + spectrum[11]) / 4;
	range_4 = (spectrum[12] + spectrum[13] + spectrum[14] + spectrum[15]) / 4;

	range_1 = map(range_1, 0, 255, 0, 1);
	range_2 = map(range_2, 0, 255, 0, 1);
	range_3 = map(range_3, 0, 255, 0, 1);
	range_4 = map(range_4, 0, 255, 0, 1);
}

function touchStarted() {
	getAudioContext().resume();
  }