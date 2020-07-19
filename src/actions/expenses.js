import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (
    { 
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => {
    return (dispatch) => {
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove()
        .then(() => {
            dispatch(removeExpense(id));
        });
    };
};

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).update(updates)
        .then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// export const clearState = () => ({
//     type: "CLEAR_STATE"
// });

// export const startSetExpenses = () => {
//     return (dispatch) => {
//         database.ref('expenses').on('value', (snapshot) => {
//             dispatch(clearState());
//             const val = snapshot.val();
//             for(const key in val){
//                 dispatch(addExpense({
//                     id: key,
//                     ...val[key]
//                 }));
//             }
//         });
//     };
// }