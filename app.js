const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkNumber = document.getElementById("check-number");
const checkBirthdayLuck = document.getElementById("checkBirtdayLuck");

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        console.log("Your Birthday is Lucky 🚀");
        checkBirthdayLuck.innerText = "Your Birthday is Lucky 🚀";
    } else {
        console.log("Your Birthday is not Lucky 😖");
        checkBirthdayLuck.innerText = "Your Birthday is not Lucky 😖";
    }
}

function checkBirtdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber);
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumber.addEventListener("click", checkBirtdayIsLucky);