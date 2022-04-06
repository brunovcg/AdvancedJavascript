function cashMachine(value) {
  let result = "Notas Sacadas: | ";
  let currentValue = value;

  const notas = [200, 100, 50, 20, 10, 5, 2, 1];

  for (let i = 0; i < notas.length; i++) {
    if (currentValue >= notas[i]) {
      result += `Nota de ${notas[i]} : ${Math.trunc(
        currentValue / notas[i]
      )}und | `;

      currentValue =
        currentValue - notas[i] * Math.trunc(currentValue / notas[i]);
    }
  }

  return result + " *SALDO:" + currentValue;
}

console.log(cashMachine(900));


