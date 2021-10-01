const userName = document.querySelector("#userName");
const userSurname = document.querySelector("#userSurname");
const userPatronymic = document.querySelector("#userPatronymic");
const getDataButton = document.querySelector("#getData");
let nameError = document.querySelector("#name-error");
let patronymicError = document.querySelector("#patronymic-error");
let surnameError = document.querySelector("#surnameError");
let errorMessage = document.querySelector("#errorMessage");
let result = document.querySelector("#result");

userName.addEventListener("input", checkInput);
userSurname.addEventListener("input", checkInput);
userPatronymic.addEventListener("input", checkInput);

function checkInput() {

    errorMessage.innerHTML = "";

    if (!(/^[а-яА-ЯЁё]+$/.test(this.value)) ) {
        console.log("няма букаф", this.classList);
        this.classList.add("error");
        document.querySelector(`#${this.id}Error`).innerHTML = "Некорректное значение!";
        getDataButton.classList.add("disabled");
        getDataButton.setAttribute("disabled", true);
        errorMessage.innerHTML = "";

    } else {
        console.log("зачистить ошибку");
        this.classList.remove("error");
        document.querySelector(`#${this.id}Error`).innerHTML = "";
        getDataButton.classList.remove("disabled");
        getDataButton.removeAttribute("disabled");
        errorMessage.innerHTML = "";
    }

    if (!this.value) {
        document.querySelector(`#${this.id}Error`).innerHTML = "Поле не должно быть пустым";
        errorMessage.innerHTML = "Запоните все поля";
    }
}

getDataButton.addEventListener("click", function() {

    if (!(userName.value && userSurname.value && userPatronymic)) {
        errorMessage.innerHTML = "Все поля должны быть заполнены!";
    } else  {
        errorMessage.innerHTML = "";
        let name = stylizeWord(userName);
        let patronymic = stylizeWord(userPatronymic);
        let surname = stylizeWord(userSurname);

        result.innerHTML = `${name} ${patronymic} ${surname}`;

        function stylizeWord(word) {
            return word.value[0].toUpperCase() + word.value.slice(1).toLowerCase();
        }
        
    }
});