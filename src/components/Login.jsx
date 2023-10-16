import { useState } from 'react';
import Axios from 'axios';
import FormInput from './layout/Forminput';
import '../css/authForm.css';
import config from '../config.js';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${config.apiBaseUrl}/api/auth/login`, {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data;
          localStorage.setItem('mini-web-app', token);
          window.location = '/account/users';
        }
      })
      .catch((err) => {
        console.error(err);
        if (err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('Something went wrong.');
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-form-container col-lg-3">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <div>
          {error && (
            <div class="alert alert-light" role="alert">
              {error}
            </div>
          )}
        </div>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button class="btn btn-form" type="submit">
          Submit
        </button>
        <h6>
          Have not an account?
          <a href="/registration"> sign in</a>
        </h6>
      </form>
    </div>
  );
};

export default Login;
