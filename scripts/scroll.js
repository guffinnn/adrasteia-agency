const buttons = document.querySelectorAll(".form__button"),
    form = document.querySelector("#form");

for(let button of buttons) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        form.scrollIntoView({ block: "center", behavior: "smooth" });
    });
}