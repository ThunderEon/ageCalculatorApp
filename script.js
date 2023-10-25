let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let inputs = document.querySelectorAll("input[type=number]");
let submitBtn = document.getElementById("submit-btn");
let outputs = document.getElementsByClassName("numbers");
let isValid;

submitBtn.addEventListener("click" , calculateDate);

function errorHandling() {
  for (let element of inputs) {
    element.addEventListener("input", calculateOP);
    element.addEventListener("blur", calculateOP);
    function calculateOP(){
      if (element.getAttribute("id") == "day") {
        if (!element.value) {
          element.nextElementSibling.style.display = "block";
          element.nextElementSibling.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.add("error-color");
          element.setAttribute("class", "error-border");
          isValid = false;
          return;
        } else {
          element.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.remove("error-color");
          element.removeAttribute("class");
          isValid = true;
        }
        if (element.value <= 0 || element.value > 31) {
          element.nextElementSibling.nextElementSibling.style.display = "block";
          element.previousElementSibling.classList.add("error-color");
          element.setAttribute("class", "error-border");
          isValid = false;
          return;
        } else {
          element.nextElementSibling.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.remove("error-color");
          element.removeAttribute("class");
          isValid = true;
        }
      }
      
      if (element.getAttribute("id") == "month") {
        if (!element.value) {
          element.nextElementSibling.style.display = "block";
          element.nextElementSibling.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.add("error-color");
          element.setAttribute("class", "error-border");
          isValid = false;
          return;
        } else {
          element.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.remove("error-color");
          element.removeAttribute("class");
          isValid = true;
        }
        if (element.value <= 0 || element.value >= 13) {
          element.nextElementSibling.nextElementSibling.style.display = "block";
          element.previousElementSibling.classList.add("error-color");
          element.setAttribute("class", "error-border");
          isValid = false;
          return;
        } else {
          element.nextElementSibling.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.remove("error-color");
          element.removeAttribute("class");
          isValid = true;
        }
      }
      if (element.getAttribute("id") == "year") {
        if (!element.value) {
          element.nextElementSibling.style.display = "block";
          element.nextElementSibling.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.add("error-color");
          element.setAttribute("class", "error-border");
          isValid = false;
          return;
        } else {
          element.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.remove("error-color");
          element.removeAttribute("class");
          isValid = true;
        }
        if (element.value > currentYear) {
          element.nextElementSibling.nextElementSibling.style.display = "block";
          element.previousElementSibling.classList.add("error-color");
          element.setAttribute("class", "error-border");
          isValid = false;
          return;
        } else {
          element.nextElementSibling.nextElementSibling.style.display = "";
          element.previousElementSibling.classList.remove("error-color");
          element.removeAttribute("class");
          isValid = true;
        }
      }
    };
  }
}
errorHandling();


function calculateDate(){
if(isValid===true)
{
  let brithDate = `${inputs[2].value}/${inputs[1].value}/${inputs[0].value}`;
  console.log(brithDate);
  let brithDateObj = new Date(brithDate);
  let diffTime = currentTime - brithDateObj;
  let ageDate = new Date(diffTime);
  let ageYear = ageDate.getUTCFullYear() - 1970;
  let ageMonth = ageDate.getUTCMonth();
  let ageDay = ageDate.getUTCDate();
  outputs[0].textContent = ageYear;
  outputs[1].textContent = ageMonth;
  outputs[2].textContent = ageDay;
}
else{
alert("Fill The Fields Correctly!");
}
};




