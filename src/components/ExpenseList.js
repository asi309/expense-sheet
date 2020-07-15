import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilteredExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.list === 0 ? (
                <p>No expenses</p>
            ):(
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={ expense.id } { ...expense } />;
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: getFilteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
