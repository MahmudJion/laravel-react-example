import React from 'react';
import ReactDOM from 'react-dom';

const User = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React in Laravel</h2></div>
                        <div className="card-body">I'm a React component in a Laravel app!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;

// DOM element
const rootElement = document.getElementById('user');
if (rootElement) {
    ReactDOM.render(<User />, rootElement);
}