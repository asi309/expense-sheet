import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';


test('Should return 0 if no expenses', () => {
    const data = [];
    const total = getExpensesTotal(data);
    expect(total).toBe(0);
});

test('Should correctly add up single expenses', () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const data = [expenses[0]];
    const expectedTotal = data.map((expense) => expense.amount).reduce(reducer, 0);
    const total = getExpensesTotal(data);
    expect(total).toBe(expectedTotal);
});

test('Should correctly add up multiple expenses', () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const data = expenses;
    const expectedTotal = data.map((expense) => expense.amount).reduce(reducer, 0);
    const total = getExpensesTotal(data);
    expect(total).toBe(expectedTotal);
});