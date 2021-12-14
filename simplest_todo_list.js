function isNotValidNumber(number) {
    return isNaN(number) || !isFinite(number) || number == null || number == `` || number <= 0
}

function todoNumberFunc() {
    let firstNumber = +prompt(`Введи число запланированных на завтра задач.`)
    message +=
        (isNotValidNumber(firstNumber)) ? `Введено некорректное значение.` :
            `На завтра запланирвоано ${firstNumber} задач. <br/>`
}

/// ${prompt(`Введи название задачи ${n}.`)}
/// ${prompt(`Введи приотритетность задачи ${n}.`)}
/// ${prompt(`Введи срок выполнения задачи ${n}.`)}
/// ${prompt(`Введи описание задачи ${n}.`)}

function todoPlaner() {
    let todoNumber = todoNumberFunc()
    let serialNumber = 0
    do {
        serialNumber+=1;
        message += `Задача ${serialNumber} <br/>`;
        message += `Название задачи ${serialNumber}: название <br/>`;
        message += `Приритетность задачи ${serialNumber}: приоритетность <br/>`;
        message += `Срок задачи ${serialNumber}: срок выполнения <br/>`;
        message += `Описание задачи ${serialNumber}: описание <br/>`;
    } while (todoNumber == serialNumber);
}

let message = ``

todoPlaner()

document.write(message)