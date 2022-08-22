import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useEmailValidity from "../../hooks/useEmailValidity";
import usePasswordValidity from "../../hooks/usePasswordValidity";
import { login } from "../../state/User/User";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useEmailValidity();
  const password = usePasswordValidity();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.validity && password.validity) {
      const { payload } = await dispatch(login({
        email: email.value,
        password: password.value
      }))
      if (payload.id) navigate("/")
      else alert("Invalid credentials")
    }
    else alert("Enter a valid email and password");
  };
  return (
    <>
      <div className='form-background'>
        <div className="form-container">
          <header>
            <h2>Sign up</h2>
          </header>
          <div className='form login-form'>
            <form className="form" onSubmit={handleSubmit} >
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder="Email"
                {...email} ></input>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder="Password"
                {...password}></input>

              <input type="submit" />

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
