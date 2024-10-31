const despesas = {
  aluguel: 600.0,
  agua: 40.0,
  feira: 1000.0,
  energia: 125.0,
  racao: 95.0,
  gas: 95.0,
  investimentos: 1300.0,
};

const totalDespesas = Object.values(despesas).reduce((acc, valor) => acc + valor, 0);

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularDespesas() {
  const entrada = parseFloat(document.getElementById("entrada").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(entrada) || entrada <= 0) {
    resultadoDiv.innerHTML = "<p>Por favor, insira um valor válido.</p>";
    return;
  }

  if (entrada >= totalDespesas) {
    resultadoDiv.innerHTML += `<p>Entrada: ${formatarMoeda(entrada)}</p><p>Despesas cobertas:</p>`;
    for (const [key, value] of Object.entries(despesas)) {
      resultadoDiv.innerHTML += `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${formatarMoeda(value)}</p>`;
    }
    const sobra = entrada - totalDespesas;
    resultadoDiv.innerHTML += `<p><strong>Valor excedente:</strong> ${formatarMoeda(sobra)}</p>`;
  } else {
    resultadoDiv.innerHTML += `<p>Entrada: ${formatarMoeda(entrada)}</p><p>Distribuição proporcional:</p>`;
    for (const [key, value] of Object.entries(despesas)) {
      const proporcional = (entrada * value) / totalDespesas;
      resultadoDiv.innerHTML += `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${formatarMoeda(proporcional)}</p>`;
    }
  }
}
