function solveQuadratic(a, b, c) {
  // Check if 'a' is zero, which would make it not a quadratic equation
  if (a === 0) {
    return "Coefficient a cannot be zero for a quadratic equation.";
  }

  // Calculate the discriminant (b^2 - 4ac)
  const discriminant = b * b - 4 * a * c;

  // Check if the discriminant is negative, zero, or positive
  if (discriminant < 0) {
    return "No real roots exist.";
  } else if (discriminant === 0) {
    // One real root (repeated root)
    const root = -b / (2 * a);
    return `One real root: ${root}`;
  } else {
    // Two real roots
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    return `Two real roots: ${root1} and ${root2}`;
  }
}

// Example usage:
const a = 1,
  b = -3,
  c = 2;
console.log(`Solving equation ${a}x^2 + ${b}x + ${c} = 0`);
console.log(solveQuadratic(a, b, c));

const d = 1,
  e = 2,
  f = 1;
console.log(`Solving equation ${d}x^2 + ${e}x + ${f} = 0`);
console.log(solveQuadratic(d, e, f));

const g = 1,
  h = 1,
  i = 1;
console.log(`Solving equation ${g}x^2 + ${h}x + ${i} = 0`);
console.log(solveQuadratic(g, h, i));
