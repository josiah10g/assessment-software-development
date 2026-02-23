# Expense Tracker Architecture

## 1. Project Overview

The Expense Tracker is a frontend-only web application built using:

- HTML
- CSS
- JavaScript
- Chart.js

The application allows users to:

- Add income and expense transactions
- View total income, total expenses, and balance
- Filter transactions
- Visualize financial data using charts
- Store data in the browser using LocalStorage


## 2. Application Structure

The project follows this structure:

projects/expense-tracker-project/
│
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── README.md


- index.html → Contains the structure of the dashboard
- style.css → Contains styling and layout design
- script.js → Contains all application logic and interactivity


## 3. Data Structure

Each transaction will follow this format:

{
  id: number,
  type: "income" or "expense",
  amount: number,
  category: string,
  date: string
}


## 4. Data Flow

1. User fills the transaction form.
2. JavaScript creates a transaction object.
3. The transaction is added to an array.
4. The array is saved to LocalStorage.
5. The UI updates to reflect the new data.
6. Charts update based on the transaction data.


## 5. Storage Decision

LocalStorage is used because:

- No backend is required for this project
- Data persists after page refresh
- It is suitable for small-scale frontend applications


## 6. Charting Library

Chart.js is used for data visualization because:

- It is lightweight and easy to integrate
- It supports pie and bar charts
- It provides clear visual representation of financial data

## 7. Design Considerations
- Code is organized to separate structure (HTML), styling (CSS), and behavior (JS).
- This makes the project easier to maintain, update, and extend.