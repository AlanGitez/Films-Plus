import React from "react";

export default function Register() {
  return (
    <>
      <div className='form-background'>
        <div className="form-container">
          <header>

            <h2>Sign up</h2>
          </header>
          <form className="form">
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' placeholder="Username"></input>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder="Email"></input>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder="Password"></input>
            <label htmlFor='check-password'>Re-password</label>
            <input type='password' id='check-password' placeholder="Password"></input>
            <input type="submit" />
            <div className="form-options">
              <p>
                Already have an account?
                <a>Clik aqui!</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
