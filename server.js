const Fraction = require('fraction.js');

// The function decompose will take in 
// 1) Rationale
// or 2) Fraction
function decompose(no){
	// result array to store the result to return
	let result = []
	f1 = new Fraction(no);
	console.log('fi : '+f1);
	// first lets do for numbers where the fraction is greater than 1
	if(f1.n > f1.d){
		//if decompose is 3 then first Part n = 3 and d = 1
		let firstPart = parseInt(f1.n/f1.d);
		// now we get 3
		console.log('firstPart: '+ firstPart);
		// okay so the first one will be firstPart / 1 so thats 3/1 and done..
		// now lets repeat with decompose(3.1)
		// now we have 3/1 and 0.1 so lets convert 0.1.
		let remainingFraction = new Fraction(f1-firstPart);
		// this will give us n 0 and d as 1
		console.log('remainingFraction ' + remainingFraction);
		// so lets decompose the new stuff..
		// so 3/1  
	    // so now the 0.1 which is left will go to the next function..
	    // storing the result and taking it to the next number..
		result = [firstPart + "/1"].concat(decompose(remainingFraction.n + "/" + remainingFraction.d));
		return result;
    
    // lets stop inifinty here
    }else if(f1.n/f1.d < 0.000000001){
    	return []
	}else{
		// now the 0.1 which is small will come here.
		// now we will calculate the next denominator 
		// okay so now we have 3/1 above and adding 1/10
		// lets turn it around d/n so n is 1
		// console.log('f1.d ' +f1.d);
		// console.log('f1.n ' + f1.n);
		var nextDenominator = Math.ceil(f1.d /f1.n); // lets just round it up

		console.log('nextD: ' + nextDenominator);
		// lets make it 1/10
		var nextFraction = new Fraction("1/" + nextDenominator);
		console.log(nextFraction);
		// lets check again if there is remaining fractions if its 3.11, but this case there isnt any..
		var remainingFraction = new Fraction(f1 - nextFraction);
		console.log('remainingFraction ' + remainingFraction);
		// so this is zero we have to end it in the next iteration since it will become infiinty.
		result = ["1/" + nextDenominator].concat(decompose(remainingFraction.n + "/" + remainingFraction.d, nextDenominator));
		// returning the calculated result.
		return result;

	}

}
// okay error found..
function test (){
	var x = new Fraction("1/" + "1.5");
	// ahh no wonder invalid error..
	return x
}
// more than 1
//console.log(decompose("3"));
//console.log(decompose("3.1"));
//console.log(decompose("3.11"));
// less than 1 
//console.log(decompose("2/3"));
//console.log(test());
//  okay 2/3 works
//console.log(decompose("21/23")); // getting [ '1/2', '1/3', '1/13', '1/359', '1/644046' ]


console.log('------------------------------------');
console.log('decompose -> 3');
console.log(decompose(3));

console.log('------------------------------------');
console.log('decompose -> 2/3');
console.log(decompose(2/3));


console.log('------------------------------------');
console.log('decompose -> 21/23');
console.log(decompose(21/23));

