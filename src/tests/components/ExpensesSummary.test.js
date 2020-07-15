import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should setup Expenses properly for single expense', () => {
    const data = {
        expensesCount: 1,
        totalExpenses: 195
    };
    const wrapper = shallow(
        <ExpensesSummary
            expensesCount={data.expensesCount}
            totalExpenses={data.totalExpenses}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('Should setup Expenses properly for multiple expenses', () => {
    const data = {
        expensesCount: 4,
        totalExpenses: 109500
    };
    const wrapper = shallow(
        <ExpensesSummary
            expensesCount={data.expensesCount}
            totalExpenses={data.totalExpenses}
        />
    );
    expect(wrapper).toMatchSnapshot();
});