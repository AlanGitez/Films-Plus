import React from "react";

export default function Login() {
  return (
    <>
      <div className='form login-form'>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email'></input>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password'></input>
        </form>
      </div>
    </>
  );
}
