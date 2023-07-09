const DOM = ele => document.querySelector(ele)

// Maquina de escrever
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

typeWriter(DOM("section.main > pre"))

// Up arrow
const upAside = DOM('aside')
setInterval(() => {
    if(window.pageYOffset >= 60) upAside.classList.add('show')
    else upAside.classList.remove('show')
}, 200)
upAside.addEventListener('click', () => {
    window.scroll(0,0)
})