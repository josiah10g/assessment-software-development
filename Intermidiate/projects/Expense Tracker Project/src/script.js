// Select form and output elements
const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const totalIncome = document.getElementById('total-income');
const totalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');

// Array to hold transactions
let transactions = [];

// Listen for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const amount = Math.abs(parseFloat(document.getElementById('amount').value)); // <-- fix here
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const transaction = {
        id: Date.now(),
        type,
        amount,
        category,
        date
    };

    transactions.push(transaction);
    renderTransactions();
    form.reset();
});
// Function to display transactions
function renderTransactions() {
    transactionList.innerHTML = '';

    transactions.forEach(t => {
        const li = document.createElement('li');
        li.classList.add(t.type);

        const leftDiv = document.createElement('div');
        leftDiv.textContent = `${t.date} - ${t.type.toUpperCase()} - ${t.category}`;

        const rightDiv = document.createElement('div');
        rightDiv.textContent = `$${t.amount.toFixed(2)}`; // <-- add $ here

        li.appendChild(leftDiv);
        li.appendChild(rightDiv);

        transactionList.appendChild(li);
    });

    updateSummary();
}

// Function to update totals
function updateSummary() {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    // Add $ before the numbers
    totalIncome.textContent = `$${income.toFixed(2)}`;
    totalExpense.textContent = `$${expense.toFixed(2)}`;
    balance.textContent = `$${(income - expense).toFixed(2)}`;
}