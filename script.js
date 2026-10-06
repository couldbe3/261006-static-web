let count = 0;

const button = document.getElementById("cheer");
const countText = document.getElementById("count");

button.addEventListener("click", function () {
  count = count + 1;
  countText.textContent = "응원 " + count + "회";
});
