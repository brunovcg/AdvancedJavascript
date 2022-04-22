const names = {
  oneToNineteen: {
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "catorze",
    15: "quinze",
    16: "desesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove",
  },
  setOfTen: {
    2: "vinte",
    3: "trinta",
    4: "quarenta",
    5: "cinquenta",
    6: "sessenta",
    7: "setenta",
    8: "oitenta",
    9: "noventa",
  },
  cent: {
    1: "cento",
    2: "duzentos",
    3: "trezentos",
    4: "quatrocentos",
    5: "quinhentos",
    6: "seiscentos",
    7: "setecentos",
    8: "oitocentos",
    9: "novecentos",
  },
  exceptions: {
    100: "cem",
    1000: "mil",
  },
};

let result = [];

const getSeparatedValues = (valor) => {
  let valorString = valor.toString();
  let response = {};

  if (valorString.length === 1) {
    response.unit = valor;
   
  } else if (valorString.length === 2 && valor < 20) {
    response.oneToNineteen = Number(valorString);

  } else if (valorString.length === 2) {
    response.unit = Number(valorString[1]);
    response.ten = Number(valorString[0]);
    
  } else if (valorString.length === 3) {
    response.tenUnit = Number(valorString[1] + valorString[2]);
    response.cent = Number(valorString[0]); 
  }
  return response;
};

const give1to99names = (valor) => {
  let value = getSeparatedValues(valor);

  if (valor < 10) {
    return names.oneToNineteen[value.unit];
  } else if (valor < 20) {
    return names["oneToNineteen"][value.oneToNineteen];
  } else if (valor < 100) {
    let setOfTen = names["setOfTen"][value.ten];
    let unit = names["oneToNineteen"][value.unit];

    if (unit) {
      unit = ` e ${unit}`;
    } else {
      unit = "";
    }
    return setOfTen + unit;
  }
};

for (let i = 1; i <= 1000; i++) {
  let value = getSeparatedValues(i);

  if (i < 100) {
    result.push(give1to99names(i));
  } else if (i === 100) {
    result.push(names.exceptions[100]);
  } else if (i < 1000) {
    let cent = names["cent"][value.cent];

    let tenUnit = value.tenUnit;

    if (tenUnit) {
      result.push(cent + " e " + give1to99names(tenUnit));
    } else {
      result.push(cent);
    }
  } else if (i === 1000) {
    result.push(names.exceptions[1000]);
  }
}

console.log(result);
