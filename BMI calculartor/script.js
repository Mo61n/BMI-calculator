var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "underweight 😒";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "healthy weight 😀";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "overweight 😅";
    }else if((BMI > 30) && (BMI < 39.9)){
        statement.innerText = "obese range 🙄";
    }else{
        statement.innerText = "Please fill in the fields";
    }
});