import { LocalGasStation } from '@material-ui/icons';
import React, { useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password, password2 } = formData;
  const history = useHistory();
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'https://projecthydragroupserver.herokuapp.com/api/login',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('admin', response.data.admin);
      
      history.push('adminpanel');
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <div classNameName="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={(e) => onChange2(e)}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="5"
            onChange={(e) => onChange2(e)}
          />
          <button onClick={(e) => onSubmit2(e)}>Login</button>
        </form>
      </div>
    </div>
  );
}
