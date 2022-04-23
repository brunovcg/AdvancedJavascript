class Journey {
  constructor(object, crew, balloons) {
    this.weight = object.weight;
    this.crew = crew;
    this.balloons = balloons;
  }

  isPossible() {
    return 0.0048 * this.balloons >= this.crew * 80 + this.weight
      ? true
      : false;
  }
}

// -------------------------

function journey2(object, crew, balloons) {
  this.object = object;
  this.crew = crew;
  this.balloons = balloons;
}

journey2.prototype.isPossible = function () {
  return this.balloons * 0.0048 >= this.object.weight + this.crew * 80;
};

// -------------------------

function journey3(object, crew, balloons) {
  this.isPossible = function () {
    return object.weight + crew * 80 <= (balloons * 4.8) / 1000;
  };
}

// -------------------------

function journey4(object, crew, balloons) {
  return {
    isPossible: () => balloons * 0.0048 >= object.weight + 80 * crew,
  };
}

// ---------------------

function journey5({ weight }, a, b) {
  this.isPossible = () => weight + a * 80 <= b * 48e-4;
}
