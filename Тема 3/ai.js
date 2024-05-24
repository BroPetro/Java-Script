// Зберігаємо інформацію про попередні повідомлення
var previousMessages = [];

// Функція для відображення попередніх повідомлень
function displayPreviousMessages() {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    previousMessages.forEach(function(message) {
        chatBox.innerHTML += "<p>" + message + "</p>";
    });
}

// Функція для відправлення повідомлення
function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        previousMessages.push(userInput);
        displayPreviousMessages();
        document.getElementById("userInput").value = "";
    }
}

// Відображення попередніх повідомлень при завантаженні сторінки
window.onload = function() {
    displayPreviousMessages();
};
