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
        gradeLetter +=
            (inNotEmpty(gradeNumber)) ? `Все оценки введены и переведены. Подсчёт окончен.`:
                (gradeNumber >= 0 && gradeNumber <= 59) ? `${gradeNumber} – F; <br/>` :
                    (gradeNumber >= 60 && gradeNumber <= 69) ? `${gradeNumber} – D; <br/>` :
                        (gradeNumber >= 70 && gradeNumber <= 79) ? `${gradeNumber} – C; <br/>` :
                            (gradeNumber >= 80 && gradeNumber <= 89) ? `${gradeNumber} – B; <br/>`:
                                (gradeNumber >= 90 && gradeNumber <= 100) ? `${gradeNumber} – A; <br/>` :
                                    `Последняя оценка указана некорректно, работа цикла программы отменена.`;
    }
}

let gradeLetter = ``;

gradeConverter();

document.write(`Введённые оценки: <br/> ${gradeLetter}`);