document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMeBtn");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.classList.remove("hidden");
    button.textContent = "Clicked!";
    button.disabled = true;
  });
});
