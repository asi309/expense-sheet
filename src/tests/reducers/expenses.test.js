import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('Should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '0'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const test_add_expense = {
        id: 1,
        description: 'Testing add expense',
        note: '',
        amount: 1234,
        createdAt: 10000
    };
    
    const action = {
        type: 'ADD_EXPENSE',
        expense: test_add_expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, test_add_expense]);
});

test('Should edit expense', () => {
    const test_edit_expense = {
        id: 1,
        description: 'Chewing gum',
        note: '',
        amount: 1243,
        createdAt: 10000
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: test_edit_expense.id,
        updates: test_edit_expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([test_edit_expense, expenses[1], expenses[2]]);
});

test('Should not edit expense if expense not found', () => {
    const test_edit_expense = {
        id: 0,
        description: 'Chewing gum',
        note: '',
        amount: 1243,
        createdAt: 10000
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: test_edit_expense.id,
        updates: test_edit_expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
