// Получаем ссылки на необходимые элементы
const inputNumberElement = document.getElementById("inputNumber");
const totalNumberElement = document.getElementById("totalNumber");
const counterElement = document.getElementById("counter");
const multiplaction = document.getElementById("multiplaction");
const clear = document.getElementById("btn-clear");

// Обработчик события для кнопки "clear"
clear.addEventListener("click", function() {
    inputNumberElement.textContent = "0";  // Сброс значения в inputNumber
    totalNumberElement.textContent = "0";  // Сброс значения в totalNumber
    numberButtons.forEach(function(btn) {
      btn.classList.remove("active");  // Сброс активности кнопок 1, 2, 3, 4, 5
    });
    checkAndDisplayCounter();  // Проверка условий и отображение/скрытие counter
  });
  

// Обработчики событий для кнопок "deacrese" и "increase"
document.getElementById("btn-deacrese").addEventListener("click", function() {
  let currentNumber = parseInt(inputNumberElement.textContent);
  currentNumber -= 1;
  inputNumberElement.textContent = currentNumber;
  checkAndDisplayCounter();
});

document.getElementById("btn-increase").addEventListener("click", function() {
  let currentNumber = parseInt(inputNumberElement.textContent);
  currentNumber += 1;
  inputNumberElement.textContent = currentNumber;
  checkAndDisplayCounter();
});

// Обработчик события для кнопки "multiplication"
multiplaction.addEventListener("click", function() {
  const selectedNumber = parseInt(document.querySelector(".btn-num.active").textContent);
  const currentNumber = parseInt(inputNumberElement.textContent);
  const result = selectedNumber * currentNumber;
  totalNumberElement.textContent = result;
  checkAndDisplayCounter();
});

// Обработчики событий для кнопок 1, 2, 3, 4, 5
const numberButtons = document.querySelectorAll(".btn-num");
numberButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    numberButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

// Функция для проверки условий и отображения/скрытия counter
function checkAndDisplayCounter() {
  const totalNumber = parseInt(totalNumberElement.textContent);
  if (totalNumber < 0 || totalNumber > 100) {
    counterElement.style.visibility = "visible";
  } else {
    counterElement.style.visibility = "hidden";
  }
}

// Обработчик события для кнопки "Close" в counter
document.querySelector(".btn-close").addEventListener("click", function() {
  counterElement.style.visibility = "hidden";
});

// Инициализация: начальное скрытие counter
counterElement.style.visibility = "hidden";
