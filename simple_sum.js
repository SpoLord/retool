function isNotValidNumber(number) {
    return isNaN(number) || !isFinite(number) || number == null || number == `` || number <= 0
}

let firstNumber = +prompt("Введи число больше 0, но меньше ∞.")

let secondNumber = +prompt("Введи ещё одно число больше 0, но меньше ∞.")

if (isNotValidNumber(firstNumber) || isNotValidNumber(secondNumber)) {
    document.write(`Сука тупая, ты ввёл непотребное число. Можно ли суммировать непотребные числа?`)
} else {

    let sum = firstNumber + secondNumber

    console.log(`Сумма ${firstNumber} и ${secondNumber} = ${sum}`)
    document.write(`Сумма ${firstNumber} и ${secondNumber} = ${sum}`)
}