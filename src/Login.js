import React, { useState } from 'react'
import './Login.css'
import LogoWide from './img/logo-wide.png'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import Button from '@mui/material/Button';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [profilePic, setProfilePic] = useState('')
const dispatch = useDispatch()

  const loginToApp = (e) => {
    // login logic
    e.preventDefault()
  }
  const register = () => {
    // register logic
    if (!name) {
      return alert('Please enter a full name!')
    }

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
 // Update user profile
 return user.updateProfile({
  displayName: name,
  photoURL: profilePic,
});
})
.then(() => {
// Profile updated successfully
// Additional code after profile update if needed
})
.catch((error) => {
// Handle errors during sign up or profile update
console.error("Error:", error.message);
});

  }
  return (
    <div className='login'>
      <img src={LogoWide} className='LogoWide' alt='Logo Wide' />
      <form>
        <input 
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Full name (required if registering)' 
          type='text' />
        <input 
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder='Profile pic URL (optional)' type='text' />
        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder='Email' 
          type='email' />
        <input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password' 
          type='password' />
       
        <Button  type='submit' onClick={loginToApp} variant="contained" color="success">Sign In</Button>
      </form>
      <p>Not a member? {'' }
        <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login