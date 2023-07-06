function verificar() {
    let anoAtual = new Date().getFullYear()
    let anoNascimento = document.getElementById('idade')
    let foto = document.getElementById('foto')

    if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        let sexo = document.getElementsByName('sexo')
        let idade = anoAtual - Number(anoNascimento.value)
        let genero = ''
        let imagem = document.createElement('img')

        imagem.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', './assets/bebe-mas.webp')
                
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', './assets/jovem-mas.webp')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', './assets/adulto-mas.webp')
            } else {
                // Idoso
                imagem.setAttribute('src', './assets/idoso-mas.webp')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', './assets/bebe-fem.webp')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', './assets/jovem-fem.webp')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', './assets/adulto-fem.webp')
            } else {
                // Idoso
                imagem.setAttribute('src', './assets/idoso-fem.webp')
            }
        }
        document.getElementById('resposta').innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resposta.appendChild(imagem)
    }
}
