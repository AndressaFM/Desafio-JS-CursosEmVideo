function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.getElementById("res")

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
       let fsex = document.getElementsByName('sex')
       let idade = ano - Number(fano.value)
       let genero = ''
       let img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
        genero = 'Masculino'
        if(idade>=0 && idade<2) {
            //bebe
            img.setAttribute('src', '../imagens2/bebe_menino.jpg')
        } else if(idade>=2 && idade <=9) {
            //criança
            img.setAttribute('src', '../imagens2/criança_menino.jpg')
        } else if(idade>=10 && idade<=20) {
            //adolescente
            img.setAttribute('src', '../imagens2/adolescente.jpg')
        } else if(idade>= 21 && idade <=64) {
            //adulto
            img.setAttribute('src', '../imagens2/homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', '../imagens2/idoso.jpg')
        }
       } else if (fsex[1].checked){
        genero = 'Feminino'
        if(idade>=0 && idade<2) {
            //bebe
            img.setAttribute('src', '../imagens2/bebe_menina.jpg')
        } else if(idade>=2 && idade <=9) {
            //criança
            img.setAttribute('src', '../imagens2/criança_menina.jpg')
        } else if(idade>=10 && idade<=20) {
            //adolescente
            img.setAttribute('src', '../imagens2/garota_adolescente.jpg')
        } else if(idade>= 21 && idade <=64) {
            //adulta
            img.setAttribute('src', '../imagens2/mulher.jpg')
        } else {
            //idosa
            img.setAttribute('src', '../imagens2/idosa.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos que você é do gênero ${genero} e têm ${idade} anos de idade.`
       res.appendChild(img)
    }
}