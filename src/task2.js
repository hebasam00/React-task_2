import React, { useState, useEffect } from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const doubleCount = count * 2;

    useEffect(() => {
        console.log(`Count: ${count}`);
    }, [count]); 

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <h1>Double Counter: {doubleCount}</h1>
        </div>
    );
};

export default CounterApp;
