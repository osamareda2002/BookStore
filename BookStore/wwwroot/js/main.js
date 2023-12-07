let button = document.querySelectorAll(".row button");
let closeMark = document.querySelectorAll(".info .icon");
let info = document.querySelectorAll(".info");

let buttonOne = document.querySelector(".btn-one");
let bookOne = document.querySelector(".book-one");

let buttonTwo = document.querySelector(".btn-two");
let bookTwo = document.querySelector(".book-two");

let buttonThree = document.querySelector(".btn-three");
let bookThree = document.querySelector(".book-three");
let overlay = document.createElement("div");

button.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
  });
});

closeMark.forEach((mark) => {
  mark.addEventListener("click", () => {
    overlay.classList.add("d-none");
    info.forEach((e) => {
      e.classList.add("d-none");
    });
  });
});

buttonOne.addEventListener("click", () => {
  bookOne.classList.remove("d-none");
});

buttonTwo.addEventListener("click", () => {
  bookTwo.classList.remove("d-none");
});

buttonThree.addEventListener("click", () => {
  bookThree.classList.remove("d-none");
});
