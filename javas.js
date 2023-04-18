const dolar = 4.94
const euro = 5.45
const bitcoin = 0.0000069
const dolareeuro = 0.91
const dolarEBit = 0.000033
const euroDolar = 1.1
const euroEBit = 0.000036



const convertValues = () => {
    const inputReais = document.getElementById('input1').value
    const p = document.getElementById('ValorRealMudar')
    const p1 = document.getElementById('ValorEmDolar')



    if (select1.value === "R$ Real Brasileiro") {
        p.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputReais)
    }


    else if (select1.value === "US$ Dólar Americano") {
        p.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais)
    }

    else if (select1.value === "€ Euro") {
        p.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais)
    }


    // p1.innerHTML = (inputReais / dolar).toFixed(2)  


    if (select.value === 'US$ Dólar Americano' && select1.value === 'US$ Dólar Americano') {
        p1.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais)
    }

    else if (select1.value === 'US$ Dólar Americano' && select.value === '€ Euro') {
        p1.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais * dolareeuro)
    }
    else if (select1.value === 'US$ Dólar Americano' && select.value === '₿ Bitcoin') {
        p1.innerHTML = inputReais * dolarEBit
    }
    else if (select1.value === 'US$ Dólar Americano' && select.value === 'R$ Real Brasileiro') {
        p1.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputReais * dolar)
    }

    if (select1.value === '€ Euro' && select.value === '€ Euro') {
        p1.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais)
    }
    else if (select1.value === '€ Euro' && select.value === 'US$ Dólar Americano') {
        p1.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais * euroDolar)
    }
    else if (select1.value === '€ Euro' && select.value === '₿ Bitcoin') {
        p1.innerHTML = inputReais * euroEBit
    }
    else if (select1.value ==='€ Euro' && select.value==='R$ Real Brasileiro'){
        p1.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais * euro)
    }

        if (select1.value === "R$ Real Brasileiro" && select.value === "US$ Dólar Americano") {
            p1.innerHTML = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(inputReais / dolar)
        }

        else if (select1.value === 'R$ Real Brasileiro' && select.value === "€ Euro") {
            p1.innerHTML = new Intl.NumberFormat('de-DE',
                { style: 'currency', currency: 'EUR' }
            ).format(inputReais / euro)
        }

        else if (select1.value === 'R$ Real Brasileiro' && select.value === '₿ Bitcoin') {
            p1.innerHTML = inputReais * bitcoin

        }

        else if (select1.value === 'R$ Real Brasileiro' && select.value === 'R$ Real Brasileiro') {
            p1.innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(inputReais)
        }


    MudançasAdcionais()
}

const button = document.getElementById('IdButton')

const select1 = document.getElementById('select1')
const select = document.getElementById('select')
button.addEventListener('click', convertValues)
select1.addEventListener('change', convertValues)




const MudançasAdcionais = () => {
    const mudarNomeSelect1 = document.getElementById('NomeReal')
    const labelValor = document.getElementById('labelValor')
    const imgdecima = document.getElementById('imagemdecima')

    if (select1.value === 'R$ Real Brasileiro') {
        imgdecima.src = '/brasil 2.png'
    }

    if (select1.value === 'US$ Dólar Americano') {
        imgdecima.src = '/estados-unidos (1) 1.png'
    }

    if (select1.value === '€ Euro') {
        imgdecima.src = '/euro.png'
    }

    if (select1.value === "R$ Real Brasileiro") {
        mudarNomeSelect1.innerHTML = "Real"
        labelValor.innerHTML = 'Valor em Real'
    }
    if (select1.value === "US$ Dólar Americano") {
        mudarNomeSelect1.innerHTML = 'Dólar Americano'
        labelValor.innerHTML = 'Valor em Dólar'
    }
    if (select1.value === "€ Euro") {
        mudarNomeSelect1.innerHTML = "Euro"
        labelValor.innerHTML = "Valor em Euro"
    }
}







const changeDolarEEuro = () => {
    const text = document.getElementById('TextoDolarAmericano')
    const img = document.getElementById('Imagem-das-bandeiras')

    if (select.value === 'R$ Real Brasileiro') {
        text.innerHTML = 'Real'
        img.src = '/brasil 2.png'
    }

    if (select.value === "€ Euro") {
        text.innerHTML = '€ Euro'
        img.src = "/euro.png"

    }
    if (select.value === "US$ Dólar Americano") {
        text.innerHTML = 'Dólar Americano'
        img.src = "/estados-unidos (1) 1.png"
    } if (select.value === "₿ Bitcoin") {
        text.innerHTML = 'Bitcoin'
        img.src = "/bitcoin.png"
    }


    convertValues()     /* ISSO TÁ AQUI PRA QUANDO MUDAR DE DOLAR PRA EURO MUDAR TBM O VALOR QUE ESTAVA*/
}

select.addEventListener("change", changeDolarEEuro)


