// Adapted from MDN tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API

window.onload = function() {


  // globals
  var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
  oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);


  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  var maxFreq = 20000;
  var maxVol = 1;

  var initialFreq = 3000;
  var initialVol = 0.5;

  // set options for the oscillator

  oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.frequency.value = initialFreq; // value in hertz
  oscillator.start();

  gainNode.gain.value = initialVol;

  // Mouse pointer coordinates

  var CurX;
  var CurY;

  // Get new mouse pointer coordinates when mouse is moved
  // then set new gain and putch values

  document.onmousemove = updatePage;

  function updatePage(e) {
    CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    var freq = Math.floor((CurX / WIDTH) * maxFreq);
    oscillator.frequency.value = freq;
    //var ampl = (CurY / HEIGHT) * maxVol;
    var ampl = $( "input#volume").val() / 100 ;
    console.log(ampl);
    gainNode.gain.value = ampl;

    //console.log(CurX, CurY, WIDTH, HEIGHT);
    $("span#freq").text(freq);
    $("span#ampl").text(Math.floor(1000 * ampl) / 10 + "%");

  }
};
