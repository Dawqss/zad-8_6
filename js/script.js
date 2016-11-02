function getTriangleArea(a, h) {

	var argLength = arguments.length;

	if (argLength == 0) {
		console.warn('błąd: Nie podałeś żadnych liczb');
		return;
	}

	else if (argLength == 1) {
		console.warn('błąd: Podałeś tylko jedną liczbę: '+arguments[0]);
		return;
	}

	if (a <= 0)	{
		console.warn('błędne dane, a mniejsze lub równe zero'), console.log('-- koniec działania --');
		return;
	}

	else if (h <= 0) {
		console.warn('błędne dane, h mniejsze lub równe zero');
		return;
	}

	console.log('pole trójkąta wynosi: ' +(a * h / 2));
	console.log('-- koniec działania --');

}

function getTriangleAreaShort(a, h) {

	if (a > 0 && h > 0) {
		console.log('pole trójkąta wynosi: ' +(a * h / 2));
		console.log('-- koniec działania --');
		return;
	}
	
	else if (!a || !h) {
		console.warn('nie podałeś wszystkich danych');
		return;
	}

	else {
		console.warn('błędne dane');
		return;
	} 
}

getTriangleArea(10/5, 20/4);
getTriangleArea(3.5, 2.5);
getTriangleArea(6, 18);
getTriangleArea(3, 4);
getTriangleArea(0, 4);
getTriangleArea(-1, -5);
getTriangleArea();
getTriangleArea(1);

getTriangleAreaShort(1, 1);
getTriangleAreaShort(2, 5);
getTriangleAreaShort(0, 5);
getTriangleAreaShort(-2, 5);
getTriangleAreaShort(2, -3);
getTriangleAreaShort();
getTriangleAreaShort(2);