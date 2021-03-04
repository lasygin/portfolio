gsap.registerPlugin(ScrollToPlugin);
let tl = gsap.timeline();

tl.from('.transition1', {
  y: '-30%',
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
});
tl.from('.transition2', {
  opacity: 0,
  duration: .5,
});
tl.from('.transition3', {
  opacity: 0,
  duration: 1,
  ease: Power2.easeOut,
});

const projectsLink = document.getElementById('projects-link');
const meLink = document.getElementById('me-link');
projectsLink.addEventListener('click', () => {
  gsap.to(window, { duration: .5, scrollTo: '#projects' });
});
meLink.addEventListener('click', () => {
  gsap.to(window, { duration: .5, scrollTo: '#me' });
});
