const $ = (s) => document.querySelector(s);
const partyButton = $('#partyButton');
const gallery = $('#gallery');
const toast = $('#toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
function celebrate(count=75){const bits=['🎉','💖','✨','🌸','🎈','⭐','💕','🥳'];for(let i=0;i<count;i++){const el=document.createElement('span');el.className='confetti';el.textContent=bits[Math.floor(Math.random()*bits.length)];el.style.left=Math.random()*100+'vw';el.style.animationDuration=(2.2+Math.random()*2.8)+'s';el.style.animationDelay=(Math.random()*.8)+'s';el.style.fontSize=(14+Math.random()*20)+'px';document.body.appendChild(el);setTimeout(()=>el.remove(),6000)}}
partyButton.addEventListener('click',()=>{celebrate();showToast('PARTY MODE: ACTIVATED 🥳')});
$('#wishConfetti').addEventListener('click',()=>{celebrate(110);showToast('Wish sent to the universe 💫')});
const predictions=['A spontaneous plan will become a core memory. 💃','Your next chapter comes with plot twists—in the best way. ✨','More laughter, more love, and at least one excellent meal await. 🍰','A little courage will open a very good door. 🚪','Your people are going to remind you how loved you are. 💗','Main-character energy: unusually high this year. 🪩','A tiny surprise is going to make a big day. 🎁','The universe says: say yes to the fun thing. 🎈'];
let last=-1;$('#wishButton').addEventListener('click',()=>{let n;do{n=Math.floor(Math.random()*predictions.length)}while(n===last);last=n;$('#prediction').textContent=predictions[n];celebrate(18)});
// Tap/click a memory to open a full-screen photo viewer.
const lightbox = $('#lightbox');
const lightboxImage = lightbox.querySelector('img');
function closeLightbox(){lightbox.hidden=true;document.body.style.overflow=''}
gallery.addEventListener('click',e=>{const card=e.target.closest('.photo-card');if(!card||e.target.closest('.remove-photo'))return;const img=card.querySelector('img');if(!img)return;lightboxImage.src=img.src;lightboxImage.alt=img.alt;lightbox.hidden=false;document.body.style.overflow='hidden'});
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lightbox.hidden)closeLightbox()});

// A cheerful sound button uses the browser's built-in tone generator; no audio files needed.
let audioContext=null;$('#musicButton').addEventListener('click',async()=>{try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')await audioContext.resume();const now=audioContext.currentTime;[523.25,659.25,783.99,1046.5].forEach((freq,i)=>{const osc=audioContext.createOscillator();const gain=audioContext.createGain();osc.type='sine';osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,now+i*.16);gain.gain.exponentialRampToValueAtTime(.12,now+i*.16+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+i*.16+.3);osc.connect(gain);gain.connect(audioContext.destination);osc.start(now+i*.16);osc.stop(now+i*.16+.32)});showToast('A tiny birthday fanfare, just for you 🎶')}catch(e){showToast('Your browser kept the music quiet — party anyway! 🎉')}});
