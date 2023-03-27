const questionBox = document.querySelector(".question-box");
const submitBox = document.querySelector(".submitBox");
const submitBtn = document.querySelector(".submitBtn");
const inputs = document.querySelectorAll(".input");
let rate = document.querySelector(".rate");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  questionBox.classList.remove("active");
  submitBox.classList.add("active");

  inputs.forEach((input) => {
    if (input.checked) {
      rate.textContent = input.value;
    }
  });
});
