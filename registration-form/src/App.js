import React, {useState} from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';


function App() {
    const [showRegistration, setShowRegistration] = useState(true);


    const handleSwitchForm = () => {
        setShowRegistration((prevShowRegistration) => !prevShowRegistration);
    };

    return (
        <div className="App">
            <h1 className={"text-danger"}>{showRegistration ? 'Registration Form' : 'Login Form'}</h1>

            {showRegistration ? (
                <>
                    <RegistrationForm/>
                    <p>
                        Already have an account?{' '}
                        <button onClick={handleSwitchForm}>Switch to Login</button>
                    </p>
                </>
            ) : (
                <>
                    <LoginForm/>
                    <p>
                        Don't have an account?{' '}
                        <button onClick={handleSwitchForm}>Switch to Registration</button>
                    </p>
                </>
            )}
        </div>

    );
}

export default App;
