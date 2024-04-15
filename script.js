function annualIncome() {
    var input = document.getElementById("annual-income").value;
    var annualIncomeCheck = /^\d*\.?\d*$/;

    if (input.trim() === "") {
        var divText = document.getElementById("newMessage");
        var icon = document.getElementById("myicon1");
        divText.innerHTML = "Input field is mandatory";
        icon.style.backgroundColor = "red";
        return false;
    } else {
        if (annualIncomeCheck.test(input)) {
            var icon = document.getElementById("myicon1");
            var divText = document.getElementById("newMessage");
            divText.innerHTML = "Please enter numbers only";
            icon.style.backgroundColor = "green";
            return true;
        } else {
            var icon = document.getElementById("myicon1");
            var divText = document.getElementById("newMessage");
            divText.innerHTML = "Please enter numbers only";
            icon.style.backgroundColor = "red";
            return false;
        }
    }
}

function extraIncome() {
    var input = document.getElementById("extra-income").value;
    var extraIncomeCheck = /^\d*\.?\d*$/;

    if (extraIncomeCheck.test(input)) {
        var icon = document.getElementById("myicon2");
        icon.style.backgroundColor = "green";
        return true;
    } else {
        var icon = document.getElementById("myicon2");
        icon.style.backgroundColor = "red";
        return false;
    }
}

function ageGroup() {
    var input = document.getElementById("age-group").value;

    if (input === "") {
        var icon = document.getElementById("myicon3");
        icon.style.backgroundColor = "red";
        return false;
    } else {
        var icon = document.getElementById("myicon3");
        icon.style.backgroundColor = "green";
        return true;
    }
}

function deduction() {
    var input = document.getElementById("deduction").value;
    var extraIncomeCheck = /^\d*\.?\d*$/;

    if (extraIncomeCheck.test(input)) {
        var icon = document.getElementById("myicon4");
        icon.style.backgroundColor = "green";
        return true;
    } else {
        var icon = document.getElementById("myicon4");
        icon.style.backgroundColor = "red";
        return false;
    }
}

function taxCalculation() {
    var input1 = document.getElementById("annual-income").value;
    var input2 = document.getElementById("extra-income").value;
    var ageGroupInput = document.getElementById("age-group").value;
    var input3 = document.getElementById("deduction").value;

    var annualIncomeInput = parseInt(input1);
    if (input2 === "") {
        var extraIncomeInput = 0;
    } else {
        var extraIncomeInput = parseInt(input2);
    }
    if (input3 === "") {
        var deductionInput = 0;
    } else {
        var deductionInput = parseInt(input3);
    }

    var taxCalc = annualIncomeInput + extraIncomeInput - deductionInput;

    if (taxCalc <= 800000) {
        return (taxCalc);
    } else {
        if (ageGroupInput === "<40") {
            return (0.3 * (taxCalc - 800000));
        } else if (ageGroupInput === ">=40&<60") {
            return (0.4 * (taxCalc - 800000));
        } else {
            return (0.1 * (taxCalc - 800000));
        }
    }
}

function myForm() {
    var isValid = true;
    isValid = annualIncome() && isValid;
    isValid = extraIncome() && isValid;
    isValid = ageGroup() && isValid;
    isValid = deduction() && isValid;

    return isValid;
}

function closeFunc() {
    var myDiv = document.getElementById("result");
    if (myDiv.style.display === "block") {
        myDiv.style.display = "none"; // Show the div
    }
    location.reload();
}

function handleSubmit(e) {
    e.preventDefault();

    if (myForm()) {
        var result = taxCalculation();
        var val = document.getElementById("h3");
        val.innerHTML = result;
        var myDiv = document.getElementById("result");

        if (myDiv.style.display === "none") {
            myDiv.style.display = "block"; // Show the div
        } else {
            myDiv.style.display = "none"; // Hide the div
        }
    }
}

document.getElementById("myForm").addEventListener("submit", handleSubmit);