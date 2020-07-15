import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getFilteredExpense from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        {
            props.expensesCount === 1 &&
            <h4>Viewing 1 expense totalling {numeral(props.totalExpenses / 100).format('$0,0.00')}</h4>
        }
        {
            props.expensesCount > 1 &&
            <h4>Viewing {props.expensesCount} expenses totalling
                {numeral(props.totalExpenses / 100).format('$0,0.00')}
            </h4>
        }
    </div>
);

const mapStateToProps = (state) => ({
    expensesCount: getFilteredExpense(state.expenses, state.filters).length,
    totalExpenses: getExpensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);