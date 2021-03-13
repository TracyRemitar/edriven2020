function show(){
    subtotal = document.getElementById("SubTotal").value;
    tax = document.getElementById("Tax");
    total = document.getElementById("Total");
    amountPaid = document.getElementById("AmountPaid");
    if (subtotal <= 10000 && subtotal >= 100){
        fee = (subtotal * 0.12);
        subtax = parseInt(subtotal) + fee;
        amountPaid.removeAttribute("disabled");
        tax.value = fee.toFixed(2);
        total.value = subtax.toFixed(2);
        amountPaid.value = subtax.toFixed(2);
        coins();
    }
    else{

    }
}
function coins(){
    change = document.getElementById("Change");
    amountPaid = document.getElementById("AmountPaid");
    total = document.getElementById("Total");
    pay = document.getElementById("Pay")
    calchange = parseFloat(amountPaid.value)- parseFloat(total.value);
    change.value = calchange.toFixed(2);
    if (change.value >= 0){
        pay.removeAttribute("disabled");
        pay.style.backgroundColor = "green";
    }
    else{
        pay.setAttribute("disabled", true);
        pay.style.backgroundColor = "darkred";
    }
}