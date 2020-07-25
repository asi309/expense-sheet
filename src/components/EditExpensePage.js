import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

export const EditExpensePage = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const handleRemoveExpense = (e) => {
        props.onRemove(props.expense.id);
        props.history.push('/');
    };
    
    return (
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
                        openModal();
                    }}
                >
                    Remove Expense
                </button>
                <RemoveModal
                    isOpen = {modalIsOpen}
                    handleModalClose = {closeModal}
                    handleRemoveExpense={handleRemoveExpense}
                />
            </div>
        </div>
    );
};

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