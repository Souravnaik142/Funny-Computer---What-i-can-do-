const bubble = document.getElementById("bubble");
const screen = document.getElementById("screen");
const story = [
  {text:"👋 Do you want to know what I can do?", screen:"💻 Hello!"},
  {text:"🎵 I can play a song!", screen:'<audio controls autoplay><source src="assets/music.mp3" type="audio/mpeg"></audio>'},
  {text:"🤸 Can I dance?", screen:"Trying cartwheel..."},
  {text:"😅 I can show dance videos but not dance!", screen:'<video width="200" autoplay muted><source src="assets/dance.mp4" type="video/mp4"></video>'},
  {text:"📊 I can teach Excel!", screen:'<img src="assets/excel.png" width="180">'},
  {text:"🎬 I can show cartoons!", screen:'<video width="200" autoplay muted><source src="assets/cartoon.mp4" type="video/mp4"></video>'},
  {text:"🤣 I can tell jokes!", screen:"😂 Why did the computer go to school?<br>To improve its byte!"},
  {text:"🌌 I can explain science!", screen:'<img src="assets/science.png" width="180">'},
  {text:"📝 I can quiz you!", screen:"Q: What is 2+2?<br>A) 3  B) 4  C) 5"},
  {text:"🌐 I can show YouTube videos!", screen:'<iframe width="200" height="120" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen></iframe>'}
];
let index = 0;
function nextStep() {
  if(index >= story.length) index = 0;
  bubble.textContent = story[index].text;
  screen.innerHTML = story[index].screen;
  index++;
}
setInterval(nextStep, 10000);
const eyes = document.querySelectorAll('.eye');
document.addEventListener('mousemove', (e) => {
  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const x = Math.cos(angle) * 12;
    const y = Math.sin(angle) * 12;
    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});