var header = document.getElementById('header');

window.onscroll = function() {
  if (window.pageYOffset >= 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};