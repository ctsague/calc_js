
function add(a, b){
	return a + b;
}

function substract(a, b){
	return a - b;
}

function mult(a,b){
	return a * b;
}

function calc(){
	var operation = process.argv[2];

	var x = process.argv[3];
	var y = process.argv[4];

	var a = parseInt(x, 10);
	var b = parseInt(y, 10);

	if(operation === 'add') {
		console.log(add(a, b));
	} else if (operation === 'substract'){
		console.log(substract(a, b));
	} else {
		console.log (mult(a, b));
	}

	
	
}


calc();