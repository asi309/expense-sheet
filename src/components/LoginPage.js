import React from 'react';
import { connect } from 'react-redux';
import { startGithubLogin, startGoogleLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({
    startFacebookLogin,
    startGithubLogin,
    startGoogleLogin
}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expense Sheet</h1>
            <p>Keep track of your expenses and never run out of budget</p>
            <button className="button" onClick={ startFacebookLogin }>Login with Facebook</button>
            <button className="button" onClick={ startGithubLogin }>Login with GitHub</button>
            <button className="button" onClick={ startGoogleLogin }>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startGithubLogin: () => dispatch(startGithubLogin()),
    startGoogleLogin: () => dispatch(startGoogleLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);