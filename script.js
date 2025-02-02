function showSurprise() {
    document.getElementById("bg-music").play();

    // Efek confetti
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.getElementById("confetti").appendChild(confetti);

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    }
}

// Animasi confetti
const style = document.createElement("style");
style.innerHTML = `
    .confetti {
        width: 10px;
        height: 10px;
        position: absolute;
        top: 0;
        border-radius: 50%;
        opacity: 0.7;
        animation: fall linear infinite;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);