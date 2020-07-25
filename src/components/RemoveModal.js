import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemoveExpense } from '../actions/expenses';

export const RemoveModal = (props) => {
    Modal.setAppElement(document.getElementById('app'));
    return (
        <Modal
            isOpen = {props.isOpen}
            handleModalClose = {props.handleModalClose}
            contentLabel = "Remove Expense"
            closeTimeoutMS = {250}
            className="modal"
        >
            <h3 className="modal__title">Remove Expense</h3>
            <p className="modal__body">Are you sure you want to remove this expense?</p>
            <button
                className="button button--warning"
                onClick={props.handleRemoveExpense}
            >
                Remove
            </button>
            <button
                className="button"
                onClick={props.handleModalClose}
            >
                Cancel
            </button>
        </Modal>
    );
};

const MapDispatchToProps = (dispatch) => ({
    onRemove: (id) => dispatch(startRemoveExpense(id))
});

export default connect(undefined, MapDispatchToProps)(RemoveModal);