document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const phoneInput = document.getElementById("phoneInput");
  const errorMessage = document.getElementById("errorMessage");

  if (phoneInput.value === "+38111111111") {
      window.location.href = "pin.html";
  } else if (phoneInput.value === "+38000000000") {
      errorMessage.style.display = "block";
      phoneInput.style.borderColor = "#fa0101"
  } else {
      errorMessage.style.display = "none";
  }
});