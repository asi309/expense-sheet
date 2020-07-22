import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        {
        //     <form>
        //     <input
        //         type="text"
        //         placeholder="username or email"
        //         autoFocus
        //     />
        //     <input
        //         type="password"
        //         placeholder="password"
        //     />
        //     <button onClick={ startLogin }>Submit</button>
        // </form>
    }
        <button onClick={ startLogin }>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);