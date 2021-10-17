"use strict";

const email = document.querySelector(".inputValue");
const errorMsg = document.querySelector(".error-msg");

errorMsg.style.display = "none";
let errorCheck = false;

const submitEmail = function () {
  if (
    (!email.value.includes("@") && !errorCheck) ||
    (!email.value.includes(".com") && !errorCheck)
  ) {
    errorMsg.style.display = "block";
    email.style.backgroundImage = "url('/images/icon-error.svg')";
    email.style.backgroundRepeat = "no-repeat";
    email.style.backgroundPosition = "right";
    email.style.backgroundPositionX = "325px";
    email.style.borderColor = "red";
  } else {
    errorMsg.style.display = "none";
    email.style.backgroundImage = "none";
    email.style.borderColor = "hsl(0, 36%, 70%)";
  }
};
