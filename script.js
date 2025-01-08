
function Exponentiation(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && b >= 0) {
        let sum = 1
        for (let index = 0; index < b; index++) {
            sum = sum * a
        }
        console.log(sum)
    } else {
        console.log(`error:оба параметра должны быть числами, второе значение не может быть
                отрицательным`)
    }
}

Exponentiation(3, 10)


function ExponentiationSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && b >= 0) {
        let sum = a
        for (let index = 0; index < b; index++) {
            sum += sum
        }
        return sum
    } else {
        console.log(`error:оба параметра должны быть числами, второе значение не может быть
                отрицательным`)
    }
}
let result = ExponentiationSum(4, 0)
console.log(result)