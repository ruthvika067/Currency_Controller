const rates = {
    USD: { USD: 1, EUR: 0.92, INR: 83.21 },
    EUR: { EUR: 1, USD: 1.09, INR: 90.21 },
    INR: { INR: 1, USD: 0.012, EUR: 0.011 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    const convertedAmount = (amount * rates[from][to]).toFixed(2);
    document.getElementById("result").innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
}
