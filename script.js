let balance =0;
let depositTotal = 0;
let withdrawTotal = 0;
const depositSpan = document.getElementById("deposit");
const withdrawSpan = document.getElementById("withdraw");
const balanceSpan = document.getElementById("balance");
const transactionHistory = document.getElementById("transaction-history");

document.getElementById("deposit-btn").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("deposit-input").value);
    if (amount > 0) {
        balance += amount;
        depositTotal += amount;
        updateUI();
        addTransaction("Deposit", amount);
    } else {
        alert("Please enter a valid amount.");
    }
    document.getElementById("deposit-input").value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("withdraw-input").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        withdrawTotal += amount;
        updateUI();
        addTransaction("Withdraw", amount);
    } else {
        alert("Invalid amount or insufficient balance.");
    }
    document.getElementById("withdraw-input").value = "";
});

function updateUI() {
    depositSpan.innerText = depositTotal;
    withdrawSpan.innerText = withdrawTotal;
    balanceSpan.innerText = balance;
}

function addTransaction(type, amount) {
    const date = new Date().toLocaleString();
    const transactionItem = document.createElement("li");
    transactionItem.className = "border-b p-2 text-sm";
    transactionItem.innerText = `${date} - ${type}: $${amount}`;
    transactionHistory.prepend(transactionItem);
}
