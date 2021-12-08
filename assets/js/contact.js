const icons = document.querySelectorAll('.icons-for-contact img');
const tl = new TimelineMax();

icons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    tl.to(icon, 0.2, {scale: 1.3, ease: 'power2.easeIn'});
  });

  icon.addEventListener('mouseout', () => {
    tl.to(icon, 0.2, {scale: 1, ease: 'power2.easeIn'});
  });
});