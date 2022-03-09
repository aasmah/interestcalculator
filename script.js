function compute() {
    // adding variables to connect to ids from html
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    // formula to calculate
    var result = principal * years * rate / 100;
    //year to be updated and a/c to time its gonna take
    var years_modified = new Date().getFullYear() + parseInt(years);


    // format how the result is displayed
    document.getElementById("result").innerHTML = "If you deposit <mark>" +
        principal + "</mark>, <br/> at an interest rate of <mark>" +
        rate + "% </mark>.<br/> You will receive an amount of <mark>" + result +
        "</mark>,<br/>in the year <mark>" + years_modified + "</mark>.<br/>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

// <details > < summary > Click here for a sample < /summary>
//document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + amount + ",\<br\>in the year " + year + "\<br\>" <
//details>


function checkAmount() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a non-zero or a positive number");
        document.getElementById("principal").focus();
    }
}
