import { useState } from 'react';
import Axios from 'axios';
import FormInput from './layout/Forminput';
import '../css/authForm.css';
import config from '../config.js';

const Registration = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'name',
      errorMessage:
        "Username should be more than one character and shouldn't include any special character!",
      label: 'Username',
      pattern: `^(?=.*[a-zA-Z])[^0-9]{1,128}$`,
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be more than one character and can include any special character!',
      label: 'Password',
      pattern: `[a-zA-Z0-9!@#$%^&*]{1,128}$`,
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${config.apiBaseUrl}/api/auth/register`, {
      email: values.email,
      password: values.password,
      name: values.name,
    })
      .then((response) => {
        if (response.status === 201) {
          window.location = '/login';
        }
      })
      .catch((err) => {
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
    <div className="auth-form-container col-lg-4">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Create your account</h1>
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
          Already have an account?
          <a href="/login"> log in</a>
        </h6>
      </form>
    </div>
  );
};

export default Registration;
