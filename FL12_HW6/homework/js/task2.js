const a = parseFloat(prompt('Triangle side length', 'a'));
const b = parseFloat(prompt('Triangle side length', 'b'));
const c = parseFloat(prompt('Triangle side length', 'c'));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if (a + b < c || a + c < b || b + c < a) {
        alert('Triangle doesn’t exist');
        console.log('Triangle doesn’t exist');
    } else if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}