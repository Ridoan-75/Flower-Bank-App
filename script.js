let balance = 0;
let depositTotal = 0;
let withdrawTotal = 0;
const depositSpan = document.getElementById('deposit');
const withdrawSpan = document.getElementById('withdraw');
const balanceSpan = document.getElementById('balance');
const transactionHistory = document.getElementById('transaction-history');

//
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