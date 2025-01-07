
function Exponentiation(a, b) {
    if (typeof (a && b) === 'number' && b >= 0) {
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

Exponentiation(3, 0)