// script.js

document.getElementById('converterBtn').addEventListener('click', converter);

// Função para atualizar as bandeiras dependendo da seleção da moeda
function atualizarBandeira(tipo) {
    let moeda;
    let bandeiraElemento;
    
    if (tipo === 'de') {
        moeda = document.getElementById('moedaDe').value;
        bandeiraElemento = document.getElementById('bandeiraDe');
    } else if (tipo === 'para') {
        moeda = document.getElementById('moedaPara').value;
        bandeiraElemento = document.getElementById('bandeiraPara');
    }

    switch (moeda) {
        case 'BRL':
            bandeiraElemento.className = 'flag-icon flag-icon-br'; 
            break;
        case 'USD':
            bandeiraElemento.className = 'flag-icon flag-icon-us';
            break;
        case 'GBP':
            bandeiraElemento.className = 'flag-icon flag-icon-gb';
            break;
        case 'EUR':
            bandeiraElemento.className = 'flag-icon flag-icon-eu';
            break;
        case 'JPY':
            bandeiraElemento.className = 'flag-icon flag-icon-jp';
            break;
        case 'CAD':
            bandeiraElemento.className = 'flag-icon flag-icon-ca';
            break;
        case 'AUD':
            bandeiraElemento.className = 'flag-icon flag-icon-au';
            break;
        case 'CHF':
            bandeiraElemento.className = 'flag-icon flag-icon-ch';
            break;
        case 'CNY':
            bandeiraElemento.className = 'flag-icon flag-icon-cn';
            break;
        case 'INR':
            bandeiraElemento.className = 'flag-icon flag-icon-in';
            break;
        case 'MXN':
            bandeiraElemento.className = 'flag-icon flag-icon-mx';
            break;
        case 'ZAR':
            bandeiraElemento.className = 'flag-icon flag-icon-za';
            break;
        default:
            bandeiraElemento.className = 'flag-icon';
    }
}

// inicializando bandeiras
window.onload = () => {
    atualizarBandeira('de');
    atualizarBandeira('para');
};


function converter() {
    const valor = document.getElementById('valor').value;
    const moedaDe = document.getElementById('moedaDe').value;
    const moedaPara = document.getElementById('moedaPara').value;

    if (!valor) {
        alert('Por favor, insira um valor');
        return;
    }

    // Chave da API (substitua pelo seu valor)
    const apiKey = '35f8a792f57f89e9c477b846';

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${moedaDe}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const taxa = data.conversion_rates[moedaPara];
            const valorConvertido = (valor * taxa).toFixed(2);

            document.getElementById('valorConvertido').textContent = `${valor} ${moedaDe} = ${valorConvertido} ${moedaPara}`;
        })
        .catch(error => {
            console.error('Erro ao buscar taxas de câmbio:', error);
            alert('Erro ao buscar taxas de câmbio.');
        });
}
