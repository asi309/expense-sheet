import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is priviledged info. Donot share</p>}
            <WrappedComponent { ...props }/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAdmin && <p>Login to view info</p>}
            {props.isAdmin && <WrappedComponent { ...props }/>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={ false } info="This is info" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAdmin={ true } info="This is info" />, document.getElementById("app"));