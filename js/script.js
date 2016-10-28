function getTriangleArea(a, h) {

	var argLength = arguments.length;

	if (argLength == 0) {
		return console.warn('błąd: Nie podałeś żadnych liczb');
	}

	else if (argLength == 1) {
		return console.warn('błąd: Podałeś tylko jedną liczbę: '+arguments[0]);
	}

	if (a <= 0)	{
		return console.warn('błędne dane, a mniejsze lub równe zero'), console.log('-- koniec działania --');
	}

	else if (h <= 0) {
		return console.warn('błędne dane, h mniejsze lub równe zero');
	}

	return console.log('pole trójkąta wynosi: ' +(a * h / 2)), console.log('-- koniec działania --')

}

getTriangleArea(10/5, 20/4);
getTriangleArea(3.5, 2.5);
getTriangleArea(6, 18);
getTriangleArea(3, 4);
getTriangleArea(0, 4);
getTriangleArea(-1, -5);
getTriangleArea();
getTriangleArea(1);