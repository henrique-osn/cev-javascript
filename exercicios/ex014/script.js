function carregar() {
    let hora = new Date().getHours()
    let imagem = document.getElementById('imagem')

    document.getElementById('mensagem').innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        imagem.src = './assets/manha.webp'
        document.body.style.background = '#E2CD8F'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        imagem.src = './assets/tarde.webp'
        document.body.style.background = '#B9846F'
    } else {
        // Boa noite!
        imagem.src = './assets/noite.webp'
        document.body.style.background = '#515154'
    }
}
