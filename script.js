const goEnvelope = document.getElementById("goEnvelope");
const introPage = document.getElementById("intro-page");

const openButton = document.getElementById("openLetter");
const envelope = document.querySelector(".envelope");
const envelopePage = document.getElementById("envelope-page");

const polaroidsContainer = document.querySelector(".polaroids");
const overlay = document.getElementById("overlay");


/* ================= INTRO ================= */

goEnvelope.addEventListener("click", () => {
    introPage.classList.add("hide");
});

/* ================= ENVELOPE ================= */

openButton.addEventListener("click", () => {

    openButton.disabled = true;
    envelope.classList.add("open");

    setTimeout(() => {
        envelopePage.classList.add("hide");
    }, 1000);
});

/* ================= GERAR 30 FOTOS ================= */

for (let i = 1; i <= 30; i++) {

    const photo = document.createElement("div");
    photo.classList.add("photo");

    const img = document.createElement("img");
    img.src = `fotos/foto (${i}).jpg`;

    photo.appendChild(img);
    polaroidsContainer.appendChild(photo);
    

    // Espalhamento com zona central protegida
    let top, left;

    do {
        top = Math.random() * 90;
        left = Math.random() * 90;
    } 
    while (top > 30 && top < 70 && left > 30 && left < 70);

    const rotate = (Math.random() * 40) - 20;

    photo.style.top = top + "%";
    photo.style.left = left + "%";
    photo.style.transform = `rotate(${rotate}deg)`;

photo.addEventListener("click", (e) => {
    e.stopPropagation();

    const isActive = photo.classList.contains("active");

    document.querySelectorAll(".photo").forEach(p => {
        p.classList.remove("active");
    });

    if (!isActive) {
        photo.classList.add("active");
        overlay.classList.add("active");
    } else {
        overlay.classList.remove("active");
    }
});

}

/* Fechar foto ao clicar fora */
overlay.addEventListener("click", () => {
    document.querySelectorAll(".photo").forEach(p => {
        p.classList.remove("active");
    });

    overlay.classList.remove("active");
});

