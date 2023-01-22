// primeiro peguei o botão e depois criei um .addElementListener()
//depois criei a function puxando o input através de id // getElementById()
//e solicitei que imprimam o real dividido por dolar.
// criei uma constante com o valor do dólar
// coloquei o toFixed para ter apenas duas casas decimais

const button = document.getElementById('convertButton')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.6

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value')
    const dolarValue = document.getElementById('dolar-value')
    //realValue.innerHTML =  inputReal
    // dolarValue.innerHTML = (inputReal / dolar).toFixed(2)
    // console.log((inputReal / dolar).toFixed(2))

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReal);

    if (select.value === 'US$ Dólar americano') {
        dolarValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((inputReal / dolar));
    }
    if (select.value === '€ Euro') {
        dolarValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((inputReal / euro));
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/Design sem nome 1.png'
    }
    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/estados-unidos (1) 1.png'

    }
    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener('change', changeCurrency)

/*   */

