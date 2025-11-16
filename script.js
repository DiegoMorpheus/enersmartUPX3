document.getElementById("calc-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const potencia = parseFloat(document.getElementById("potencia").value);
  const horas = parseFloat(document.getElementById("horas").value);
  const dias = parseFloat(document.getElementById("dias").value);
  const valorKwh = parseFloat(document.getElementById("valor-kwh").value);

  const consumoMensal = (potencia * horas * dias) / 1000;
  const custo = consumoMensal * valorKwh;

  document.getElementById("resultado").innerHTML = `
    <p>🔋 Consumo mensal: <strong>${consumoMensal.toFixed(2)} kWh</strong></p>
    <p>💰 Custo estimado: <strong>R$ ${custo.toFixed(2)}</strong></p>
  `;
});
