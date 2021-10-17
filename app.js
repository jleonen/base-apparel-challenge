"use strict";

const email = document.querySelector(".inputValue");
const errorMsg = document.querySelector(".error-msg");
const description = document.querySelector(".description");
const submitBtn = document.querySelector("button");
const heading = document.querySelector("h1");

errorMsg.style.display = "none";
let errorCheck = false;

const renderError = function () {
  errorMsg.style.display = "block";
  email.style.backgroundImage = "url('/images/icon-error.svg')";
  email.style.backgroundRepeat = "no-repeat";
  email.style.backgroundPosition = "right";
  email.style.backgroundPositionX = "325px";
  email.style.borderColor = "red";
};

const successMsg = function () {
  errorMsg.style.display = "none";
  email.style.display = "none";
  submitBtn.style.display = "none";
  email.style.backgroundImage = "none";
  email.style.borderColor = "hsl(0, 36%, 70%)";

  heading.innerHTML = "Success!";
  description.innerHTML = `An email has been sent to <a href="#">${email.value}</a>. Please check your email in a few minutes for a verification email. Click <a href="/">here</a> to go back to the homepage.`;
};

const submitEmail = function () {
  if (
    (!email.value.includes("@") && !errorCheck) ||
    (!email.value.includes(".com") && !errorCheck)
  ) {
    renderError();
  } else {
    successMsg();
  }
};
