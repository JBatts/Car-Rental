function getReceipt(days, wantsToll, wantsGPS, wantsRoadside, isUnderAge) {
    const rentalDay = 29.99
    const surchargePercent = 0.30
    let carRental = rentalDay * days;
    if (isUnderAge) {
        surchargeAmount = surchargePercent * carRental;
        carRental += surchargeAmount // This is the same as carRental = carRental + surchargeAmount
    } else {
        surchargeAmount = 0;
    }
    let optionSubtotal = 0;
    if (wantsToll) {
        optionSubtotal += 3.95 * days;
    }
    if (wantsGPS) {
        optionSubtotal += 2.95 * days;
    }
    if (wantsRoadside) {
        optionSubtotal += 2.95 * days;
    }

    const grandTotal = carRental + optionSubtotal + surchargeAmount;
    return `
        Car Rental: $${carRental.toFixed(2)}
           Options: $${optionSubtotal.toFixed(2)}
Under 25 Surcharge: $${surchargeAmount.toFixed(2)}

         Total Due: $${grandTotal.toFixed(2)}
    `
}
document.addEventListener("DOMContentLoaded", () => {
    const pickupDate = document.getElementById("pickupDate");
    const numberOfDays = document.getElementById("numberOfDays");

    const toll = document.getElementById("toll");
    const gps = document.getElementById("gps");
    const roadside = document.getElementById("roadside");

    const notUnder = document.getElementById("notUnder");
    const isUnder = document.getElementById("isUnder");

    const estimateButton = document.getElementById("estimateButton");

    const receiptOutput = document.getElementById("receiptOutput");

    estimateButton.addEventListener("click", () => {
        receiptOutput.innerText = getReceipt(
            numberOfDays.value,
            toll.checked,
            gps.checked,
            roadside.checked,
            isUnder.checked,
        );
    });

}); // End DOM content loaded