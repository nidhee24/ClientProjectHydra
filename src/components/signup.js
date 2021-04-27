import { LocalGasStation } from '@material-ui/icons';
import React, { useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password, password2 } = formData;
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
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/register',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
      let decodeduser = decode(response.data.token);
      console.log(decodeduser);
      history.push('allPackages');
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <div classNameName="login-page">
      <div className="form">
        <form className="register-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={(e) => onChange2(e)}
          />

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
          <button onClick={(e) => onSubmit2(e)}>create</button>
        </form>
      </div>
    </div>
  );
}
