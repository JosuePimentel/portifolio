// Maquina de escrever
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
typeWriter(document.querySelector("section.main > pre"))


// Up arrow
const upAside = document.querySelector('aside')
setInterval(() => {
    if(window.pageYOffset >= 60) upAside.classList.add('show')
    else upAside.classList.remove('show')
}, 200)
upAside.addEventListener('click', () => {
    window.scroll(0,0)
})


//Scroll smooth
const sect = document.querySelectorAll('.menu > ul > li > a')
sect.forEach(ele => {
    ele.addEventListener('click', e => {
        e.preventDefault()
        const attr = ele.getAttribute('href')
        
        const to = document.querySelector(attr).offsetTop
        scroll({
            top: to,
            behavior: "smooth"
        })
    })
})
