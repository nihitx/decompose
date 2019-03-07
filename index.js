const Fraction = require('fraction.js');

function decompose(no){
	let result = []
	f1 = new Fraction(no);
	if(f1.n > f1.d){
		let firstPart = parseInt(f1.n/f1.d);
		let remainingFraction = new Fraction(f1-firstPart);
		result = [firstPart + "/1"].concat(decompose(remainingFraction.n + "/" + remainingFraction.d));
		return result;
    
    // lets stop inifinty here
    }else if(f1.n/f1.d < 0.000000001){
    	return []
	}else{
		var nextDenominator = Math.ceil(f1.d /f1.n); 
		var nextFraction = new Fraction("1/" + nextDenominator);
		var remainingFraction = new Fraction(f1 - nextFraction);
		result = ["1/" + nextDenominator].concat(decompose(remainingFraction.n + "/" + remainingFraction.d, nextDenominator));
		return result;

	}

}
console.log('------------------------------------');
console.log('decompose -> 3');
console.log(decompose(3));

console.log('------------------------------------');
console.log('decompose -> 2/3');
console.log(decompose(2/3));


console.log('------------------------------------');
console.log('decompose -> 21/23');
console.log(decompose(21/23));

