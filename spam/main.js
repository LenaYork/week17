const messages = document.querySelector("#messages");
const button = document.querySelector("#send");
const userMessage = document.querySelector("#msg");
let badCounter = 0;

userMessage.addEventListener("input", function() {
    console.log("что в текстариэ:", userMessage.value);
    if (userMessage.value && userMessage.value != "")  {
        button.removeAttribute("disabled");
        button.classList.remove("disabled");
    } else {
        button.setAttribute("disabled", true);
        button.classList.add("disabled");
    }
});

button.addEventListener("click", function() {
    messages.innerHTML += `${checkSpam(userMessage.value)}</br><hr>`;
    userMessage.value = "";
    if (badCounter > 4) {
        alert("Ваш лимит спама превышен! Вы будете заблочены :(");
    }
    button.setAttribute("disabled", true);
    button.classList.add("disabled");
});

function checkSpam(str) {
    const word1 = /viagra/gi;
    const word2 = /xxx/gi;
    const replacer = "***";
    str = str.replace(word1, replacer).replace(word2, replacer);
    console.log("преобразованный комент",str);
    if (str.includes("***")) {
        badCounter +=1;
    };
    return str;
}