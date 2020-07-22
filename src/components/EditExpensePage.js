import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.onSubmit(props.expense.id, expense);
                    props.history.push('/');
                }}
            />
            <button
                className="button button--warning"
                onClick={(e) => {
                    props.onRemove(props.expense.id);
                    props.history.push('/');
                }}
            >
                Remove Expense
            </button>
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (id, expense) => dispatch(startEditExpense(id, expense)),
    onRemove: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);