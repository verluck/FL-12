const a = parseFloat(prompt('ax\u00B2 + bx + c = 0', 'a'));
const b = parseFloat(prompt('ax\u00B2 + bx + c = 0', 'b'));
const c = parseFloat(prompt('ax\u00B2 + bx + c = 0', 'c'));
let discriminant, x1, x2;
const discriminantCoefficient = 4;
const rootCoefficient = 2;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    discriminant = b * b - discriminantCoefficient * a * c;
}
if (discriminant < 0) {
    console.log('No solution');
} else if (discriminant === 0) {
    x1 = -b / (rootCoefficient * a);
    console.log('x = ' + x1);
} else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (rootCoefficient * a);
    x2 = (-b - Math.sqrt(discriminant)) / (rootCoefficient * a);
    console.log('x\u2081 = ' + x1 + '\nx\u2082 = ' + x2);
}