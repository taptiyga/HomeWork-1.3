
// function Exponentiation(a, b) {
//     if (typeof a === 'number' && typeof b === 'number' && b >= 0) {
//         let sum = 1
//         for (let index = 0; index < b; index++) {
//             sum = sum * a
//         }
//         console.log(sum)
//     } else {
//         console.log(`error:оба параметра должны быть числами, второе значение не может быть
//                 отрицательным`)
//     }
// }

// Exponentiation(3, 10)


function ExponentiationSum(a, b) {
    if (b > 0 && typeof a === "number" && typeof b === "number") {
        let result = a;
        for (let i = 1; i < b; i++) {
            let temp = 0;
            for (let j = 0; j < result; j++) {
                temp += a;
            }
            result = temp;
        }
        console.log(result)
    } else if (b === 0) {
        console.log(1)
    } else if (b < 0) {
        console.error(`второе значение не может быть отрицательным`)
    } else {
        console.error(`оба параметра должны быть числами`)
    }
}

ExponentiationSum(3, 4)
