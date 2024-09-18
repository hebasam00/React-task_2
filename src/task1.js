import React, { useState, useEffect } from 'react';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        console.log(`Name: ${name}, Email: ${email}`);
    }, [name, email]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <div>
                    <h3>Submitted Values:</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
};

export default FormComponent;
