function gerador_tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')

    if (numero.value.length != 0) {
        let num = Number(numero.value)

        for (let cont = 1; cont <= 10; cont ++) {
            let item = document.createElement('option')

            item.text = `${num} x ${cont} = ${num * cont}`
            item.value = `tab${cont}`
            tabuada.appendChild(item)
        }
    } else {
        alert('Por favor, digite um número!')
    }
}
