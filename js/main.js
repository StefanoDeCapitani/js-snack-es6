const buttonShowLightestBike = document.querySelector(".btn--lightest-bike");

buttonShowLightestBike.addEventListener("click", function () {
  this.style.display = "none";
  displayLightestBike();
});
