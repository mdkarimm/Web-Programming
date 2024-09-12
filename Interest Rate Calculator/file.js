function genTable() {
    
    var amount = document.getElementById("deposit").valueAsNumber;
    var rate = document.getElementById("rate").valueAsNumber;
    var years = document.getElementById("years").valueAsNumber;

    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter valid numbers for all fields.</p>";
        return;
    }

   
    var table = "<table>" +
                "<tr><th>Year</th><th>Starting Value (Rs)</th>" +
                "<th>Interest Earned (Rs)</th><th>Ending Value (Rs)</th></tr>";

   
    for (var year = 1; year <= years; year++) {
        var interest = amount * rate / 100;
        var endingAmount = amount + interest;

        table += "<tr>" +
                 "<td>" + year + "</td>" +
                 "<td>Rs " + amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</td>" +
                 "<td>Rs " + interest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</td>" +
                 "<td>Rs " + endingAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</td>" +
                 "</tr>";

        amount = endingAmount; 
    }

    table += "</table>";

   
    document.getElementById("result").innerHTML = table;
}
