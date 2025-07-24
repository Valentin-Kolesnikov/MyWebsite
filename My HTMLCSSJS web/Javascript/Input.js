let age = prompt("Сколько тебе лет?");
age = Number(age); // Преобразуем строку в число
if (age >= 18) {
    alert("Доступ вам разрешён")
} else {
    alert("Иди нахуй")
}