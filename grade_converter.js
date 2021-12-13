function isNotValidGrade(number) {
    return number == null || number == `` || number < 0 || number > 100
}

function inNotEmpty(number) {
    return number == null || number == ``
}

function gradeConverter () {
    let gradeNumber = `это цифра`;
    while (!isNotValidGrade(gradeNumber)) {
        gradeNumber = prompt(`Укажите вашу оценку по 100-бальной шкале.`);
        if (!inNotEmpty(gradeNumber)) {
            if (gradeNumber >= 0 && gradeNumber <= 59) {
                gradeLetter += `${gradeNumber} – F; <br/>`;
            } else if (gradeNumber >= 60 && gradeNumber <= 69) {
                gradeLetter += `${gradeNumber} – D; <br/>`;
            } else if (gradeNumber >= 70 && gradeNumber <= 79) {
                gradeLetter += `${gradeNumber} – C; <br/>`;
            } else if (gradeNumber >= 80 && gradeNumber <= 89) {
                gradeLetter += `${gradeNumber} – B; <br/>`;
            } else if (gradeNumber >= 90 && gradeNumber <= 100) {
                gradeLetter += `${gradeNumber} – A; <br/>`;
            } else {
                gradeLetter += `Последняя оценка указана некорректно, работа цикла программы отменена.`;
                break;
            }
        } else {
            gradeLetter += `Все оценки введены и переведены. Подсчёт окончен.`;
        }
    }
}
let gradeLetter = ``;
gradeConverter();
document.write(`Введённые оценки: <br/> ${gradeLetter}`);