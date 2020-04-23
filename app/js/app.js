document.addEventListener("DOMContentLoaded", function() {
const h1 = document.querySelector("h1");
const form = document.querySelector(".form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input")
let emailValid = false;
let passValid = false;

function validateEmail() {
	const pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
	if (email.value.trim().match(pattern)) {
		email.nextElementSibling.classList.remove("invalid");
		email.nextElementSibling.firstElementChild.classList.add("fa-check");
		email.classList.add("valid");  
		email.nextElementSibling.firstElementChild.classList.remove("fa-times");
		email.nextElementSibling.firstElementChild.style.color = "green";  
		emailValid = true;
	} else {
		email.nextElementSibling.classList.remove("invalid"); 
		email.nextElementSibling.firstElementChild.classList.remove("fa-check"); 
		email.nextElementSibling.firstElementChild.classList.add("fa-times"); 
		email.nextElementSibling.firstElementChild.style.left = "90%";
		email.nextElementSibling.firstElementChild.style.color = "red";  
	}
 }

 function validatePassword() {
	const regexp = /[0-9]/g;
	if (password.value.trim().match(regexp) && password.value.length > 6) {
		const value = password.value;;
		password.previousElementSibling.classList.add("fa-unlock"); 
		password.classList.add("valid"); 
		password.previousElementSibling.classList.remove("fa-lock");
		password.nextElementSibling.style.fontWeight = "bold";
		password.nextElementSibling.style.color = "green"; 
		password.removeAttribute('type', 'password'); 
		password.setAttribute('type', 'text');
		password.value = value;
		passValid = true;
	} else {
		password.previousElementSibling.classList.add("fa-lock");
		password.previousElementSibling.classList.remove("fa-unlock");
		password.nextElementSibling.style.color = "red"; 
	}
}

function onBlur(){
	if (emailValid && email.value !== "" || passValid  && pass.value !== "") {
		btn.value = "Login";
		btn.classList.add("success");
		btn.classList.remove("danger");
		btn.setAttribute("disabled", false);
		h1.innerHTML = "Welcome!";
	} else {
		btn.value = "Retry";
		btn.classList.remove("success");
		btn.classList.add("danger");
		btn.setAttribute("disabled", true);
		h1.innerHTML = "Oops!";
	}
  }

 email.addEventListener("input", validateEmail);
 email.addEventListener("blur", onBlur, true);
 password.addEventListener("input", validatePassword);
 password.addEventListener("blur", onBlur, true);

 btn.addEventListener("submit", e => {
	 e.preventDefault();
});

})
