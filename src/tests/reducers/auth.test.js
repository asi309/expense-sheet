import authReducer from '../../reducers/auth';

test('Should set default auth value', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
});

test('Should setup authReducer for login', () => {
    const auth = {};
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer(auth, action);
    expect(state).toEqual({uid: action.uid});
});

test('Should setup authReducer for logout', () => {
    const auth = {
        uid: '143'
    };
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(auth, action);
    expect(state).toEqual({});
});