import React from 'react';
import { shallow } from 'enzyme';
import { login, logout } from '../../actions/auth';

test('Should setup login action object', () => {
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('Should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});