const buttonYes = document.querySelector(".button_yes");
const buttonNo = document.querySelector(".button_no");
const title = document.querySelector(".title");
buttonYes.addEventListener("click", () => {
  title.textContent = "ФАКТ!";
});
buttonNo.addEventListener("click", () => {
  buttonNo.style.display = "none";
  title.textContent = "ПИЗДАБОЛ!";
  setTimeout(() => {
    title.textContent = "Ты дурак?";
  }, 1400);
});
