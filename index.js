const inputField = document.getElementById("email");
const form = document.getElementById("notify-form");
const errorMsg = document.getElementById("error-message");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeError();
  removeSuccess();

  let inputValue = inputField.value;
  if (inputValue.trim() === "") {
    showError();
  } else if (!validateEmail(inputValue)) {
    showError();
  } else {
    showSuccess();
    setTimeout(() => {
      removeSuccess();
    }, 3000);
  }
});

function removeError() {
  inputField.classList.remove("error-border");
  errorMsg.classList.add("hidden");
}

function showError() {
  inputField.classList.add("error-border");
  errorMsg.classList.remove("hidden");
}

function removeSuccess() {
  inputField.classList.remove("error-border");
  successMsg.classList.add("hidden");
}

function showSuccess() {
  inputField.classList.remove("error-border");
  successMsg.classList.remove("hidden");
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
