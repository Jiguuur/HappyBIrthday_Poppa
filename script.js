let currentStep = 1;
let litCandles = 0;

function nextStep() {
  const current = document.getElementById(`step${currentStep}`);
  const next = document.getElementById(`step${currentStep + 1}`);
  if (current) current.classList.remove("active");
  if (next) next.classList.add("active");
  currentStep++;
  document.getElementById("progressBar").style.width = `${((currentStep-1)/2)*100}%`;
}

function handleCakeClick() {
  const flame2 = document.getElementById("flame2");
  const flame1 = document.getElementById("flame1");
  const meme = document.getElementById("memeSection");

  if (litCandles === 0) {
    flame2.style.opacity = "1";
    litCandles++;
  } else if (litCandles === 1) {
    flame1.style.opacity = "1";
    litCandles++;

    // After 2s, blow out candles and show meme
    setTimeout(() => {
      flame1.style.opacity = "0";
      flame2.style.opacity = "0";
      meme.classList.remove("hidden");
      launchConfetti();
    }, 2000);
  }
}

function launchConfetti() {
  for (let i=0;i<100;i++){
    const confetti = document.createElement("div");
    confetti.className="confetti-piece";
    confetti.style.background = `hsl(${Math.random()*360},80%,60%)`;
    confetti.style.left=Math.random()*window.innerWidth+"px";
    confetti.style.top="-10px";
    document.body.appendChild(confetti);

    const endY=window.innerHeight+50;
    confetti.animate([{transform:"translateY(0)"},{transform:`translateY(${endY}px) rotate(${Math.random()*720}deg)`}],{duration:3000+Math.random()*2000,iterations:1,easing:"ease-in"});
    setTimeout(()=>confetti.remove(),5000);
  }
}

// particles
particlesJS("particles-js", {
  particles:{number:{value:80}, color:{value:"#ff8a65"}, shape:{type:"circle"}, opacity:{value:0.5}, size:{value:3}, move:{enable:true,speed:2}}
});
