let balance = 0;
let depositTotal = 0;
let withdrawTotal = 0;
const depositSpan = document.getElementById('deposit');
const withdrawSpan = document.getElementById('withdraw');
const balanceSpan = document.getElementById('balance');
const transactionHistory = document.getElementById('transaction-history');

document.getElementById('depositBtn').addEventListener('click',function(){
    const amount = parseFloat(document.getElementById('depositInput').value);
    if (amount < 0){
        balance += amount;
        depositTotal += amount;
        updateUI();
        addTransaction('Deposit', amount);
    } else {
        alert('Please enter a positive amount.');
    }
    document.getElementById('depositInput').value = '';
});

document.getElementById('withdrawBtn').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('withdrawInput').value);
    if (amount > 0 && amount <= balance){
        balance -= amount;
        withdrawTotal += amount;
        updateUI();
        addTransaction('Withdrawal', amount);
    } else {
        alert('Please enter a valid amount and ensure it does not exceed your current balance.');
    }
    document.getElementById('withdrawInput').value = '';
}