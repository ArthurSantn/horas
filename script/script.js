function carregar() {

    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes() 

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12) {
        img.src= './imagens/diar.png'
    } else if (hora >= 12 && hora < 18) {
        img.src= './imagens/tarder.png'
        document.body.style.backgroundAttachment= "fixed"
        document.body.style.backgroundImage= "linear-gradient(to bottom, #265D73, #BF9075)"
    } else {
        img.src= './imagens/noiter.png'
        document.body.style.backgroundAttachment= "fixed"
        document.body.style.backgroundImage= "linear-gradient(to bottom, #456A73, #072126)"
    }
}

