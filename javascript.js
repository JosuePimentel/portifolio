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
    if (window.pageYOffset >= 60) upAside.classList.add('show')
    else upAside.classList.remove('show')
    console.log(window.innerHeight)

    if(window.pageYOffset >= (document.querySelector('#about').offsetTop - ((window.innerHeight * 3) / 4))) {
        document.querySelector('span#id_1 > span#top > p').classList.add('show')
        document.querySelector('span#id_1 > span#bottom > a').classList.add('show')

        document.querySelector('span#id_2 > span#top > div').classList.add('show')
        document.querySelector('span#id_2 > span#bottom > div').classList.add('show')
    } else {
        document.querySelector('span#id_1 > span#top > p').classList.remove('show')
        document.querySelector('span#id_1 > span#bottom > a').classList.remove('show')

        document.querySelector('span#id_2 > span#top > div').classList.remove('show')
        document.querySelector('span#id_2 > span#bottom > div').classList.remove('show')
    }
}, 200)
upAside.addEventListener('click', () => scrolar(0))

console.log(document.querySelector('span#id_1').offsetTop)
//Scroll smooth
const sect = document.querySelectorAll('.menu > ul > li > a')
sect.forEach(ele => {
    ele.addEventListener('click', e => {
        e.preventDefault()
        const attr = ele.getAttribute('href')
        
        const to = document.querySelector(attr).offsetTop
        scrolar(to)
    })
})

const scrolar = to => {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}
