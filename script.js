function fizzbuzz(number) {
    if (typeof number !== 'number') {
        console.log('Não é um numero')
    } else if ((number % 3 == 0) && (number % 5 == 0)) {
        console.log('FizzBuzz')
    } else if (number % 3 == 0) {
        console.log('fizz')
    } else if (number % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(number);
    };
    
}

let result = fizzbuzz(7); 
