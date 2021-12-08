const roleText = document.querySelector('.legend-of-image p');
const roleLink = document.querySelector('.legend-of-image a');
const roleBox = document.querySelector('.legend-of-image');
const imageBox = document.querySelector('.image-of-banner');

const tl = new TimelineMax({
  paused: true
});

tl.to(roleBox, 1, {height: '100%', ease: 'power4.out', onComplete: () => {
  tl.to(roleText, 0.5, {opacity: 1, ease: 'power4.out'});
  tl.to(roleLink, 0.5, {opacity: 1, ease: 'power4.out'});
}});
tl.reversed(true);

imageBox.addEventListener('click', () => {
  tl.reversed(!tl.reversed());
  
  if (tl.reversed()) {
    tl.reversed();
  } else {
    tl.play();
  }
});