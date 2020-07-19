import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
    <div>
        <h3>Edit Expense</h3>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.onSubmit(props.expense.id, expense);
                props.history.push('/');
            }}
        />
        <button
            onClick={(e) => {
                props.onRemove(props.expense.id);
                props.history.push('/');
            }}
        >
            Remove Expense
        </button>
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