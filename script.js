// Typing animation for keywords in .txtanm
const keywords = [
  'a beginner',
  'a curious student',
  'a quick learner',
  'an adaptive person',
  'an absorber'
];
const txtanmSpan = document.querySelector('.txtanm span');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseTime = 1200;

function type() {
  const currentWord = keywords[wordIndex];
  if (!isDeleting) {
    txtanmSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    txtanmSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % keywords.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, typingSpeed / 2);
    }
  }
}

document.addEventListener('DOMContentLoaded', type);


