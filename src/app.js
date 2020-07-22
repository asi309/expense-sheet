import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';


const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
//     console.log(filteredExpenses);
// });

// store.dispatch(addExpense({description: "Water Bill", amount:10000}));
// store.dispatch(addExpense({description: "Gas Bill", amount: 5000, createdAt: 1000}));
// store.dispatch(addExpense({description: "Rent", amount:10000}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses())
        .then(() => {
            renderApp();
        });
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
    } else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});