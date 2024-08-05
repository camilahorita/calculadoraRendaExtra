function calcular() {
  // Pegar o valor da viagem selecionada
  const viagemSelecionada = document.querySelector('input[name="hours-type"]:checked').value;
  const viagemCusto = parseFloat(viagemSelecionada);
  const investimento = parseFloat(document.getElementById('investimento').value);
  const receita = parseFloat(document.getElementById('receita').value);
  const receitaTipo = document.querySelector('input[name="receitaTipo"]:checked').value;

  let diasNecessarios = 0;

  if (receitaTipo === 'hora') {
      const horas = parseFloat(document.getElementById('horas').value);
      if (isNaN(investimento) || isNaN(receita) || isNaN(viagemCusto) || isNaN(horas) || receita <= 0 || viagemCusto <= 0 || horas <= 0) {
          alert('Por favor, insira valores válidos.');
          return;
      }
      const receitaDiaria = receita * horas;
      diasNecessarios = Math.ceil((investimento + viagemCusto) / receitaDiaria);
  } else {
      if (isNaN(investimento) || isNaN(receita) || isNaN(viagemCusto) || receita <= 0 || viagemCusto <= 0) {
          alert('Por favor, insira valores válidos.');
          return;
      }
      diasNecessarios = Math.ceil((investimento + viagemCusto) / receita);
  }

  const resultadoDiv = document.getElementById('resultadoDiv');
    if (diasNecessarios > 0) {
        resultadoDiv.innerHTML = `
            <div>
                <p>Investimento Inicial: R$ ${investimento.toFixed(2)}</p>
                <p>Receita ${receitaTipo === 'hora' ? 'por Hora' : 'por Dia'}: R$ ${receita.toFixed(2)}</p>
                <p>Meta: R$ ${viagemCusto.toFixed(2)}</p>
                <h3>Você precisará trabalhar por aproximadamente <span id="days-needed">${diasNecessarios} dias</span> para alcançar sua meta.</h3>
            </div>
        `;
        resultadoDiv.style.display = 'block';
    } else {
        resultadoDiv.style.display = 'none';
    }

  resultadoDiv.style.display = diasNecessarios > 0 ? 'block' : 'none';
}

document.querySelectorAll('input[name="receitaTipo"]').forEach((input) => {
  input.addEventListener('change', (event) => {
      const horasPorDiaContainer = document.getElementById('horasPorDiaContainer');
      if (event.target.value === 'hora') {
          horasPorDiaContainer.style.display = 'block';
      } else {
          horasPorDiaContainer.style.display = 'none';
      }
  });
});
