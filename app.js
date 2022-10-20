const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkNumber = document.getElementById("check-number");
const checkBirthdayLuck = document.getElementById("checkBirtdayLuck");

function compareValues(sum, luckyNumber){
    if(luckyNumber < 0 || luckyNumber == 0){
        checkBirthdayLuck.innerText = `Lucky Number should be Positive ¯\\_(ツ)_/¯ `;
    }
    else if(sum % luckyNumber === 0){
        checkBirthdayLuck.innerText = "Your Birthday is Lucky 🚀";
    } else {
        console.log("Your Birthday is not Lucky 😖");
        checkBirthdayLuck.innerText = "Your Birthday is not Lucky 😖";
    }
}

function checkBirtdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
        compareValues(sum, luckyNumber.value);
    } else {
        checkBirthdayLuck.innerText = "Please enter valid details";
    }
    
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