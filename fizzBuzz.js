let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

let FizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return("FizzBuzz")
    }
    
    else if (num % 3 === 0) {
        return("Fizz")
    }

    else if (num % 5 === 0) {
        return("Buzz")
    }

    else {
        return(num)
    }
}



for (let i = 1; i <= answer; i++) {
    console.log(FizzBuzz(i))
}