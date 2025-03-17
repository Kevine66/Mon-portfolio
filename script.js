/*document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("header h1");
    let text = title.innerText;
    title.innerText = "";
    
    text.split("").forEach((letter, i) => {
        setTimeout(() => {
            title.innerText += letter;
        }, i * 100);
    });
});*/
const textAnim = document.querySelector('h1');
new Typewriter(textAnim, {
    //deleteSpeed: 20
})
.typeString('Moi c\'est GANVO Kevine !') 
.pauseFor(1)
.typeString('<strong> <br> Développeur web  & Graphiste</strong>')
.start()
document.addEventListener("DOMContentLoaded", () => {
    const projets = document.querySelectorAll(".projet");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    projets.forEach(projet => {
        observer.observe(projet);
    });
});

