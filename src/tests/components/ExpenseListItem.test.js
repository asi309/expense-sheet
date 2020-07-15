import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpenseListItem with data', () => {
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListItem without data', () => {
    const wrapper = shallow(<ExpenseListItem />);
    expect(wrapper).toMatchSnapshot();
});