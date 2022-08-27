function area(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}
// se der zero aqui, não vai

function isInside(x1, y1, x2, y2, x3, y3, x, y) {
  /* Calculate area of triangle ABC */
  let A = area(x1, y1, x2, y2, x3, y3);

  /* Calculate area of triangle PBC */
  let B = area(x, y, x2, y2, x3, y3);

  /* Calculate area of triangle PAC */
  let C = area(x1, y1, x, y, x3, y3);

  /* Calculate area of triangle PAB */
  let D = area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */
  return A == B + C + D;
}

