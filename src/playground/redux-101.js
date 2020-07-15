import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ to } = {}) => ({
    type: "SET",
    to
});

const resetCount = () => ({
    type: "RESET"
});

const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return{
                count: action.to
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 3
});

store.dispatch(incrementCount({incrementBy: 5}));

//unsubscribe();

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({to: 100}));

store.dispatch(resetCount());