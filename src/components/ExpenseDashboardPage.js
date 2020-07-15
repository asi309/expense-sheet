import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseList />
        <ExpenseListFilters />
        <ExpensesSummary />
    </div>
);

export default ExpenseDashboardPage;