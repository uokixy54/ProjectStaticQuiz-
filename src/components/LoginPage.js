import React, {useState, useEffect} from 'react';

const Login = ({ authUser }) => {
    const [password, setPassword] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        authUser(password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Authentication System</h1>
                <h2>You need to verify...</h2>
                <input
                    type = "password"
                    id = "password"
                    value = {password}
                    onChange = {(event) => setPassword(event.target.value)}
                />
                <button type="submit"><span>Submit</span></button>
            </form>
        </div>
    );
};

export default Login;
