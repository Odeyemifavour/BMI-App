const userWeightValue = document.getElementById("userWeightValue");
const userHeightValue = document.getElementById("userHeightValue");
const displayBMI = document.getElementById("displayBMI");


function calcBMI(){
    let weight= parseFloat(userWeightValue.value);
    let height= parseFloat(userHeightValue.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for both weight and height.');
        return;
    }

     let result = (weight/(height*height)).toFixed(2);
     displayBMI.innerText = result;
     bmiResult.style.display = 'block';

}

document.getElementById("userBtn").addEventListener("click",calcBMI);