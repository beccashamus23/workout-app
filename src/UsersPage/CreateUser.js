import React, { useState } from 'react';
import 'firebase/auth';
import { fire } from './firebase';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleCreateUser = async () => {
        try {
            await fire.auth().createUserWithEmailAndPassword(email, password);
            console.log('User registered successfully');
        }
        catch {
            console.error('Registration failed');
        }
    };
    return (
        <div>
            <div>
                <input className = "textBox" type="email" value={email} placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
                <input className = "textBox" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button className = "customButton" onClick={HandleCreateUser}>Submit</button>
            </div>
        </div>
    );
} 
export default CreateUser;