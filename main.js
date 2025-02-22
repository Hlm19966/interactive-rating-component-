const successContainer = document.getElementById("successContainer");
const sumbitButton = document.getElementById("submitButton");
const mainContainer = document.getElementById("mainContainer");
const selectedNumber = document.getElementById("selectedNumber");
const numberButton = document.querySelectorAll(".btn");

let selectedRatting = null;

numberButton.forEach((btn, index) => {

    btn.addEventListener("click", ()=> {
        numberButton.forEach(btn => btn.classList.remove("active"));
         btn.classList.add("active");
         selectedRatting = btn.textContent.trim();
    })
});

sumbitButton.addEventListener("click", (event)=> {
    event.preventDefault();
    successContainer.style.display = "block";
    mainContainer.style.display = "none";
    selectedNumber.innerHTML = ` ${selectedRatting} `;

    if (!selectedRatting) {
        alert("you have not choose yet");
        selectedNumber.textContent = " none";
    
    }
});