function isNotValidNumber(number) {
    return isNaN(number) || number == null || number === ""
}

let firstNumber = +prompt("Каково первое число?")

let secondNumber = +prompt("Каково второе число?")

if (isNotValidNumber(firstNumber) || isNotValidNumber(secondNumber)) {
    document.write(`Сука тупая, ты ввёл не число. Можно ли суммировать не число?`)
} else {

    let sum = firstNumber + secondNumber

    console.log(`Сумма ${firstNumber} и ${secondNumber} = ${sum}`)
    document.write(`Сумма ${firstNumber} и ${secondNumber} = ${sum}`)
}