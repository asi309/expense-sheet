import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123', {note: "Added a new note"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {note: "Added a new note"}
    });
});

test('Should setup add expense action object with the values', () => {
    const action = addExpense({
        description: "New Expense",
        amount: 123400,
        note: "New note for expense",
        createdAt: 100
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "New Expense",
            amount: 123400,
            note: "New note for expense",
            createdAt: 100,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with the default values', () => {
    const action = addExpense();
    // console.log({action});
    // console.log(typeof action);
    expect(action).not.toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note: '',
            createdAt: 1,
            id: expect.any('String')
        }
    });
});