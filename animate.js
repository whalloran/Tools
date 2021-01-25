
// Animations including element fade in and slide in on scroll
// To add animations, elements require the CSS classes .hidden
// and the applicaple animation class (.fade-in, .slide-in-left, etc.

// Included Animations: fade-in, slide in from left, slide in from right
// and slide in from bottom


(function() {
  var elementsFadeIn;
  var elementsSlideLeft;
  var elementsSlideRight;
  var elementsSlideBottom;
  var windowHeight;

// Get all animation elements by class
  function init() {
    elementsFadeIn = document.querySelectorAll('.hidden' && '.fade-in');
    elementsSlideLeft = document.querySelectorAll('.hidden' && '.slide-in-left');
    elementsSlideRight = document.querySelectorAll('.hidden' && '.slide-in-right');
    elementsSlideBottom = document.querySelectorAll('.hidden' && '.slide-in-bottom');
    windowHeight = window.innerHeight;
  }

// Check position and activate animation elements when scrolled into view
  function checkPosition() {
  // Fade In
    for (var i = 0; i < elementsFadeIn.length; i++) {
      var elementFadeIn = elementsFadeIn[i];
      var positionFromTopFadeIn = elementsFadeIn[i].getBoundingClientRect().top;

      if (positionFromTopFadeIn - windowHeight <= 0) {
        elementFadeIn.classList.add('fading-in');
        elementFadeIn.classList.remove('hidden');
      }
    }
  // Slide In from Left
    for (var l = 0; l < elementsSlideLeft.length; l++) {
      var elementSlideLeft = elementsSlideLeft[l];
      var positionFromTopSlideLeft = elementsSlideLeft[l].getBoundingClientRect().top;

      if (positionFromTopSlideLeft - windowHeight <= 0) {
        elementSlideLeft.classList.add('slider-l');
        elementSlideLeft.classList.remove('hidden');
      }
    }

  // Slide In from Right
    for (var r = 0; r < elementsSlideRight.length; r++) {
      var elementSlideRight = elementsSlideRight[r];
      var positionFromTop = elementsSlideRight[r].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        elementSlideRight.classList.add('slider-r');
        elementSlideRight.classList.remove('hidden');

      }
    }
  // Slide In from Bottom
    for (var b = 0; b < elementsSlideBottom.length; b++) {
      var elementSlideBottom = elementsSlideBottom[b];
      var positionFromTopSlideBottom = elementsSlideBottom[b].getBoundingClientRect().top;

      if (positionFromTopSlideBottom - windowHeight <= 0) {
        elementSlideBottom.classList.add('slider-b');
        elementSlideBottom.classList.remove('hidden');
      }
    }
  }

// Event listeners to activate animation on scroll and reset animation on window resize
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();



