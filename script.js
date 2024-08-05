document.addEventListener('DOMContentLoaded', function () {
    const outroRadio = document.getElementById('outro');
    const outroDiv = document.getElementById('outroDiv');
    const lucroRadios = document.getElementsByName('lucro');
    const outrosValorInput = document.getElementById('outrosValor');

    // Função para atualizar a visibilidade do campo de entrada para "Outro"
    function atualizarVisibilidadeOutro() {
        if (outroRadio.checked) {
            outroDiv.style.display = 'block';
        } else {
            outroDiv.style.display = 'none';
            // Se a opção "Outro" não estiver selecionada, limpa o campo de entrada
            outrosValorInput.value = '';
        }
    }

    // Adiciona o evento change aos botões de rádio de lucro
    lucroRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            // Atualiza a visibilidade do campo "Outro"
            atualizarVisibilidadeOutro();
        });
    });

    // Chama a função inicial para garantir que a visibilidade está correta ao carregar a página
    atualizarVisibilidadeOutro();
});

function calcular() {
    // Obtém o valor do lucro selecionado
    const lucroRadios = document.getElementsByName('lucro');
    let lucroMensal = 0;
    const valorInserido = parseFloat(document.getElementById('outrosValor').value);

    for (const radio of lucroRadios) {
        if (radio.checked) {
            if (radio.id === 'outro') {
                // Se a opção "Outro" estiver selecionada, usa o valor inserido manualmente
                lucroMensal = valorInserido || 0; // Usa 0 se o valor inserido não for válido
            } else {
                lucroMensal = parseFloat(radio.value);
            }
            break;
        }
    }

    // Obtém o valor da meta selecionada
    const metaRadios = document.getElementsByName('meta');
    let meta = 0;
    for (const radio of metaRadios) {
        if (radio.checked) {
            meta = parseFloat(radio.value);
            break;
        }
    }

    // Calcula o número de meses necessários
    const mesesNecessarios = lucroMensal > 0 ? Math.ceil(meta / lucroMensal) : 0;

    // Exibe o resultado
    document.getElementById('lucro-mensal').innerText = `${lucroMensal.toFixed(2)}`;
    document.getElementById('lucro-anual').innerText = `${(lucroMensal*12).toFixed(2)}`;
    document.getElementById('meses').innerHTML = `${mesesNecessarios}`;
    // Exibir resultados
    document.getElementById('result').style.display = 'block';
    
}
