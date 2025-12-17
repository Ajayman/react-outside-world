import "./card.css";
import { useState } from "react";
function EmailWrapper({ email }) {
    return <h3>{email}</h3>
}

export function Card({ name, email, handleParentCount }) {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <h2>{name}</h2>
            <EmailWrapper email={email} />
            <h4>Count: {count}</h4>
            <button onClick={() => {setCount(count + 1);
            handleParentCount(count + 1);
            }}>Increment</button>
        </div>
    )
}