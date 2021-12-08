const authorElement = document.querySelector('.author');

setTimeout(() => {
  authorElement.classList.remove('animate__lightSpeedInLeft', 'animate__fast');
  authorElement.classList.add('animate__rubberBand', 'animate__slow');
}, 1000);