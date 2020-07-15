import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, onRemove, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = {push: jest.fn()};
    onRemove = jest.fn();
    wrapper = shallow(
        <EditExpensePage
            onSubmit={onSubmit}
            onRemove={onRemove}
            history={history}
            expense={expenses[1]}
        />
    );
});

test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('Should handle onRemove', () => {
    wrapper.find('button').simulate('Click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onRemove).toHaveBeenLastCalledWith(expenses[1].id);
});