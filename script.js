let balance = 0;
let depositTotal = 0;
let withdrawTotal = 0;

const depositSpan = document.getElementById('deposit');
const withdrawSpan = document.getElementById('withdraw');
const balanceSpan = document.getElementById('balance');
const transactionHistory = document.getElementById('transaction-history');

document.getElementById('depositBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('depositInput').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
    } else {
        balance += amount;
        depositTotal += amount;
        updateUI();
        addTransaction('Deposit', amount);
    }

    document.getElementById('depositInput').value = '';
});

document.getElementById('withdrawBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('withdrawInput').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
    } else if (amount > balance) {
        alert('Invalid amount or insufficient balance.');
    } else {
        balance -= amount;
        withdrawTotal += amount;
        updateUI();
        addTransaction('Withdrawal', amount);
    }

    document.getElementById('withdrawInput').value = '';
});

function updateUI() {
    depositSpan.innerText = `$${depositTotal.toFixed(2)}`;
    withdrawSpan.innerText = `$${withdrawTotal.toFixed(2)}`;
    balanceSpan.innerText = `$${balance.toFixed(2)}`;
}

function addTransaction(type, amount) {
    const date = new Date().toLocaleString();
    const transactionItem = document.createElement('li');
    transactionItem.className = 'border-b p-2 text-sm';
    transactionItem.innerText = `${date} - ${type}: $${amount.toFixed(2)}`;
    transactionHistory.prepend(transactionItem);
}
