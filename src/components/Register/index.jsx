import React from "react";
import useInput from "../../hooks/useInput";
import usePasswordValidity from "../../hooks/usePasswordValidity";
import useEmailValidity from "../../hooks/useEmailValidity";
import { User } from "../../services";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const username = useInput();
  const email = useEmailValidity();
  const password = usePasswordValidity();
  const confirmPassword = useInput();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.validity && password.validity) {
      if (password.value === confirmPassword.value) {
        const { error, data } = await User.registerRequest({
          username: username.value,
          email: email.value,
          password: password.value
        });
        error ?
          console.error(data)
          : navigate("/login")
      }
      else alert("Both passwords must match")
    }
    else alert("Enter a valid email and password")
  }
  return (
    <>
      <div className='form-background'>
        <div className="form-container">
          <header>
            <h2>Sign in</h2>
          </header>
          <form className="form" onSubmit={handleSubmit} >
            <label htmlFor='username'>Username</label>
            <input type='text'
              id='username'
              placeholder="Username"
              {...username} />

            <label htmlFor='email'>Email</label>
            <input type='email'
              id='email'
              placeholder="Email"
              {...email} />

            <label htmlFor='password'>Password</label>
            <input type='password'
              id='password'
              placeholder="Password"
              {...password} />

            <label htmlFor='check-password'>Confirm password</label>
            <input type='password'
              id='check-password'
              placeholder="Password"
              {...confirmPassword} />

            <input type="submit" />
            <div className="form-options">
              <p>
                Already have an account? Clik aqui!
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
