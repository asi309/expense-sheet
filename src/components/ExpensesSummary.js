import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getFilteredExpense from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            {
                props.expensesCount === 1 &&
                <h2 className="page-header__title">Viewing <span>1</span> expense totalling
                    <span> {numeral(props.totalExpenses / 100).format('$0,0.00')}</span>
                </h2>
            }
            {
                props.expensesCount > 1 &&
                <h2 className="page-header__title">Viewing <span>{props.expensesCount}</span> expenses totalling
                    <span> {numeral(props.totalExpenses / 100).format('$0,0.00')}</span>
                </h2>
            }
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expensesCount: getFilteredExpense(state.expenses, state.filters).length,
    totalExpenses: getExpensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);