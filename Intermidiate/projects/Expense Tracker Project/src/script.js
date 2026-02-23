// Select form and output elements
const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const totalIncome = document.getElementById('total-income');
const totalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');

// Array to hold transactions
let transactions = [];

// Listen for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from form
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    // Create transaction object
    const transaction = {
        id: Date.now(),
        type,
        amount,
        category,
        date
    };

    // Add to array
    transactions.push(transaction);

    // Render transactions to UI
    renderTransactions();

    // Reset form
    form.reset();
});

// Function to display transactions
function renderTransactions() {
    transactionList.innerHTML = '';
    transactions.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.date} - ${t.type.toUpperCase()} - ${t.category}: $${t.amount}`;
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

    totalIncome.textContent = income;
    totalExpense.textContent = expense;
    balance.textContent = income - expense;
}