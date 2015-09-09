// Adapted from MDN tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API

window.onload = function() {


  // globals
  var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
  oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  var maxFreq = 20000;
  var maxVol = 1;

  var initialFreq = 440;
  var initialVol = 0.5;

  // set options for the oscillator

  oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.frequency.value = initialFreq; // value in hertz
  oscillator.start();

  gainNode.gain.value = initialVol;

  // Get new values from input ranges
  // then set new gain and pitch values

  $("input").on("input", updatePage);

  function updatePage(e) {
    // set freq from input
    var freq = $("input#freq").val();
    oscillator.frequency.value = freq;

    // set amplitude from input
    var ampl = $("input#volume").val() / 100;
    gainNode.gain.value = ampl;

    //console.log(CurX, CurY, WIDTH, HEIGHT);
    $("span#freq").text(freq);
    $("span#ampl").text(Math.floor(100 * ampl));
  }
};
