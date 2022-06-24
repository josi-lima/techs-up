// Show-on-scroll Effect

var scroll = window.requestAnimationFrame ||
            function(callback) { window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function(target) {
    observer.observe(target);
  });


  // Scroll Reveal

ScrollReveal().reveal(' .container2', { delay: 300 });
ScrollReveal().reveal(' .container3', { delay: 300 });
ScrollReveal().reveal(' .container4', { delay: 300 });
ScrollReveal().reveal(' .img-prof', { delay: 300 });


  // Button Scroll-to-Top

const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});


