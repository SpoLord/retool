let userName = prompt("Как тебя зовут, друг?")

if (userName === null || userName === "") {
    alert("У всего в мире есть имя. Если имени нет, это не существует.")
} else {
    let message = "Привет, " + userName + ". Иди на хуй!"

    console.log(message)
    document.write(message)
}