const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

controle.forEach( (elemento, index) => {
    elemento.addEventListener('click', (event) => {
        controlaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatisticas(event.target.dataset.peca);
    });
});

function controlaDados(operacao, paiDiv){
    var contadores = paiDiv.querySelector('[data-contador]');

    if(operacao === '-'){
        if((parseInt(contadores.value) - 1) >= 0){  
            contadores.value = parseInt(contadores.value) - 1;
        };        
    } else {
        contadores.value = parseInt(contadores.value) + 1;
    };
};

function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
};