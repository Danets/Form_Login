// document.addEventListener("DOMContentLoaded", function () {
//   const h1 = document.querySelector("h1");
//   const form = document.querySelector(".form-login");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const btn = document.querySelector(".btn");
//   const errorEmail = document.querySelector(".errorEmail");
//   const errorPass = document.querySelector(".errorPass");
//   let emailValid = false;
//   let passValid = false;

//   function validateEmail() {
//     const pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
//     if (email.value.trim().match(pattern)) {
//       email.nextElementSibling.classList.remove("invalid");
//       email.nextElementSibling.firstElementChild.classList.add("fa-check");
//       email.nextElementSibling.firstElementChild.classList.remove("fa-times");
//       email.nextElementSibling.firstElementChild.style.color = "green";
//       emailValid = true;
//       errorEmail.innerHTML = "";
//     } else {
//       email.nextElementSibling.classList.remove("invalid");
//       email.nextElementSibling.firstElementChild.classList.remove("fa-check");
//       email.nextElementSibling.firstElementChild.classList.add("fa-times");
//       email.nextElementSibling.firstElementChild.style.left = "90%";
//       email.nextElementSibling.firstElementChild.style.color = "red";
//       emailValid = false;
//       errorEmail.innerHTML = "Email has to contain @";
//     }
//   }

//   function validatePassword() {
//     const regexp = /[0-9]/g;
//     if (password.value.trim().match(regexp) && password.value.length > 6) {
//       const value = password.value;
//       password.previousElementSibling.classList.add("fa-unlock");
//       password.previousElementSibling.classList.remove("fa-lock");
//       password.nextElementSibling.style.fontWeight = "bold";
//       password.nextElementSibling.style.color = "green";
//       password.removeAttribute("type", "password");
//       password.setAttribute("type", "text");
//       password.value = value;
//       passValid = true;
//       errorPass.innerHTML = "";
//     } else {
//       password.previousElementSibling.classList.add("fa-lock");
//       password.previousElementSibling.classList.remove("fa-unlock");
//       password.nextElementSibling.style.color = "red";
//       passValid = false;
//       errorPass.innerHTML = "Password has to contain minimum 6 characters and 1 number";
//     }
//   }

//   function showSuccess() {
//     btn.value = "Login";
//     btn.classList.add("success");
//     btn.classList.remove("danger");
//     btn.setAttribute("disabled", false);
//     h1.innerHTML = "Welcome!";
//   }

//   function showError() {
//     btn.value = "Retry";
//     btn.classList.remove("success");
//     btn.classList.add("danger");
//     btn.setAttribute("disabled", true);
//     h1.innerHTML = "Oops!";
//   }

//   function onBlurEmail() {
//     if (emailValid && email.value !== "") {
//       showSuccess();
//     } else {
//       showError();
//     }
//   }

//   function onBlurPassword() {
//     if (passValid && password.value !== "") {
//       showSuccess();
//     } else {
//       showError();
//     }
//   }

//   email.addEventListener("input", validateEmail);
//   email.addEventListener("blur", onBlurEmail, true);
//   password.addEventListener("input", validatePassword);
//   password.addEventListener("blur", onBlurPassword, true);

//   btn.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
// });
import { Application } from "stimulus"

import FormController from "./controllers/form_controller"

const application = Application.start()
application.register("form", FormController)
