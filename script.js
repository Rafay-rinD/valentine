    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");
    const noTexts = [
      "Yeh nahi, Yes wala click karna hai 😢",
      "Mazak kar rahi ho? 😢",
      "Are you sure? 💔",
      "Pleaseee 🥺",
      "Don’t do this 😭",
      "Think again 💔",
      "really? 🥺",
      "Kya kar rahi ho yaar 😭"
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

    });

    yesBtn.addEventListener("click", () => {
      message.style.display = "block";
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
