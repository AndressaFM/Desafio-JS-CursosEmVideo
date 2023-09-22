function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = 2
var hora = data.getHours()

if(hora>=6 && hora<12){
    msg.innerHTML = `Agora são ${hora} horas.<br> Bom dia!`
    img.src = '../imagens/manha.jpg'
    document.body.style.background = '#e2cd9f';
} else if(hora>0 && hora<6){
    msg.innerHTML = `Agora são ${hora} horas.<br> Boa madrugada!`
    img.src = '../imagens/madrugada.jpg'
    document.body.style.background = 'gray'
} else if(hora>=18 ) {
    msg.innerHTML = `Agora são ${hora} horas.<br> Boa noite!`
    img.src = '../imagens/noite.jpg'
    document.body.style.background = '#515154'
} else {
    msg.innerHTML = `Agora são ${hora} horas.<br> Boa tarde!`
    img.src = '../imagens/tarde.jpg'
    document.body.style.background = '#b9846f'
}
}