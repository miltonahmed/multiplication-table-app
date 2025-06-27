let inputField = document.querySelector("#inputField");
let submitBtn = document.querySelector("#submitBtn");
let resetBtn = document.querySelector("#resetBtn");
let displayArea = document.querySelector("#displayArea");
let darkModeToggle = document.querySelector("#darkModeToggle");

submitBtn.addEventListener("click", function () {
  let value = inputField.value.trim();

  if (value === "") {
    alert(" Please enter a number!");
    return;
  }

  let num = Number(value);
  let result = "";

  result += `<p> Number is: <strong>${num}</strong> (${num % 2 === 0 ? "Even" : "Odd"})</p>`;
  result += "<hr>";
  result += "<p> Multiplication Table:</p>";

  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}<br>`;
  }

  displayArea.innerHTML = result;
});

resetBtn.addEventListener("click", function () {
  inputField.value = "";
  displayArea.innerHTML = "";
  inputField.focus();
});

//  Dark Mode Toggle
darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // বাটনের টেক্সট পরিবর্তন করো
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Disable Dark Mode";
  } else {
    darkModeToggle.textContent = "Enable Dark Mode";
  }
});
