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
            <h1>Sign In</h1>
            <h2>Welcome Back!</h2>
            <p>Enter your authentication code to use all of site features.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-label">
                        <label htmlFor="name">Authentication Code</label>
                        <span>Required</span>
                    </div>
                        <input
                            type = "password"
                            id = "password"
                            placeholder="Authentication Code"
                            value = {password}
                            onChange = {(event) => setPassword(event.target.value)}
                            required
                        />
                </div>
                <div className='button-container'>
                    <button type="submit"><span>Submit</span></button>
                </div>
            </form>
        </div>
    );
};

export default Login;
