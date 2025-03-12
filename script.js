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
.pauseFor(300)
.typeString('<strong> <br> Dev web Full-Stack & Graphiste</strong>')
.start()

