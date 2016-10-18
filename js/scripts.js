console.log ('POLE TRÓJKĄTA a*h/2');
console.log ('Poprawność danych :');

var a;
var h;

var triangle1Area = getTriangleArea(8, 13);
var triangle2Area = getTriangleArea(0, 6);
var triangle3Area = getTriangleArea(-12, 10);

function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		console.log('a=' + a, 'h=' + h);
		console.log('-> prawidłowe dane');
		return a * h / 2
	} else {
		console.log('a=' + a, 'h=' + h);
		console.log('-> nieprawidłowe dane');
	}
} 

console.log('Pole trójkąta nr 1 wynosi: ' + triangle1Area);
console.log('Pole trójkąta nr 2 wynosi: ' + triangle2Area);
console.log('Pole trójkąta nr 3 wynosi: ' + triangle3Area);