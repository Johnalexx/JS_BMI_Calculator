function calculateBMI() {
    var weight = document.getElementById('weight').value
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0){
             var finalBmi = weight/(height/100*height/100);
            document.getElementById('Bmi').value = finalBmi;

        if(finalBmi < 18.5){
            document.getElementById('comment').innerHTML = "Too THIN";
        }
        if(finalBmi < 18.5 && finalBmi < 25){
            document.getElementById('comment').innerHTML = "HEALTHY";
        }
        if(finalBmi > 25){
            document.getElementById('comment').innerHTML = "OVERWEIGHT";
        }
    }
    else{
        alert('Fill in all Details');
    }
}