    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");
    const video = document.querySelector(".vid");
    const noTexts = [
      "Yeh nahi, Yes wala click karna hai 😢",
      "Mazak kar rahi ho? 😢",
      "Are you sure? 💔",
      "Pleaseee 🥺",
      "Don’t do this 😭",
      "Think again 💔",
      "really? 🥺",
      "Kya kar rahi ho yaar 😭",
      "Soch lo...",
      "😭😭😭",
      "🥺🥺🥺"
    ];

    // console.log(noTexts[5]);
    

    let clickCount = 0;

    noBtn.addEventListener("mouseover", () => {
      // Change button text
      noBtn.textContent = noTexts[clickCount % noTexts.length];
      clickCount++;


      // Move button randomly
      const x = Math.random() * 400 - 400;
      const y = Math.random() * 400 - 400;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;

      if(clickCount === 4){
        video.style.display = "block";
        video.play();
        setTimeout(() => {
          video.style.display = "none";
          video.pause();
        }, 6000);
      }
    });


    yesBtn.addEventListener("click", () => {
      message.style.display = "block";
      noBtn.style.display = "none";
      startHearts();
    });

    function startHearts() {
      setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 5000);
      }, 300);
    }

// const  preLoad = () =>{
//   body.preLoad();
// }

// preloader

const btnSong = document.getElementById("btnSong");
const preloader = () =>{
    const textEl = document.getElementById("text");
  const preloader = document.querySelector(".preloader");  
  const homePage = document.querySelector(".card");


  function fadeIn(text) {
    textEl.textContent = text;
    requestAnimationFrame(() => {
      textEl.style.opacity = 1;
    });
  }

  function fadeOut() {
    textEl.style.opacity = 0;
  }

  // 1️⃣ First message
  setTimeout(() => {
    fadeIn("I've wanted to ask you this for a very, very long time!!");
  }, 500);

  // 2️⃣ Fade OUT first message
  setTimeout(() => {
    fadeOut();
  }, 3800);

  // 3️⃣ Fade IN second message
  setTimeout(() => {
    fadeIn("but, couldn't get the chance...");
  }, 4500);

  // 4️⃣ Fade OUT second message
  setTimeout(() => {
    fadeOut();
  }, 6300);

  setTimeout(() => {
    fadeIn("Since the day I saw you, since I start talking to you, I haven’t been the same. Your face, your smile, keeps coming in my thoughts everytime, every small thing reminds me of you, even when I am doing nothing, as if my heart quietly chose you without asking me first❤️, and keeping this strange feeling within me...");
  }, 8100);

  setTimeout(() => {
    fadeOut();
  }, 16500);

  // 5️⃣ Final message
  setTimeout(() => {
    fadeIn("I've prepared a little surprise for you ❤️");
  }, 17500);

    setTimeout(() => {
    fadeOut();
  }, 18800);


  setTimeout(() => {
    preloader.style.display = "none";
    homePage.style.display = "block";
    homePage.classList.add("animate__zoomIn")
  }, 19800);
}

 const start = () =>{
    const song = document.getElementById("song");
    song.play();
    btnSong.style.display = "none";
    preloader();    
  }
