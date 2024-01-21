document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("inputbox");
  let buttons = document.querySelectorAll("button");
  let choose = "";

  buttonsArray = Array.from(buttons);
  buttonsArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.innerHTML == "DEL") {
        choose = choose.substring(0, choose.length - 1);
        display.value = choose;
      } else if (e.target.innerHTML == "AC") {
        choose = "";
        display.value = choose;
      } else if (e.target.innerHTML == "=") {
        choose = eval(choose);
        display.value = choose;
      } else {
        choose += e.target.innerHTML;
        display.value = choose;
      }
    });
  });
});
