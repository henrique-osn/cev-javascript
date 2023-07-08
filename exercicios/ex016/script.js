function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resposta.innerHTML = 'Impossível contar'
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        resposta.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p ) {
                resposta.innerHTML += ` ${c} `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += ` ${c} `
            }
        }
    }
}
