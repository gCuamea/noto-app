import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {
  startGoogleLogin,
  startLoginEmailPassword,
  startRegisterEmailPassword,
} from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import logo from '../../assets/companylogo.png';

export const LoginRegisterScreen = () => {
  const [
    { lemail, lpassword, rname, remail, rpassword },
    handleInputChange,
  ] = useForm({
    lemail: 'alonso@gmail.mx',
    lpassword: '123890aAa',
    rname: '',
    remail: '',
    rpassword: '',
  });

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLoginEmailPassword(lemail, lpassword));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (rpassword.length < 6) {
      Swal.fire(
        'Error',
        'Tu contrasena debe tener 6 caracteres como minimo.',
        'error'
      );
      return;
    }

    dispatch(startRegisterEmailPassword(remail, rpassword, rname));
  };

  return (
    <div className="contain animate__animated animate__slideInDown">
      <div></div>
      <img src={logo} alt="company logo" className="mt-5" />
      <div className="auth my-5">
        <div className="auth__left">
          <h2>Login</h2>

          <div className="auth__social">
            <p className="text-secondary">Use your Google account...</p>
            <i
              style={{ cursor: 'pointer' }}
              onClick={handleGoogleLogin}
              className="bi bi-google"
            ></i>
          </div>
          <p className="text-secondary m-0">...or use your credentials</p>
          <form onSubmit={handleLogin}>
            <input
              className="form__input"
              type="email"
              placeholder="Email"
              name="lemail"
              value={lemail}
              onChange={handleInputChange}
            />
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              name="lpassword"
              value={lpassword}
              onChange={handleInputChange}
            />
            <button className="button button-red" type="submit">
              Log In
            </button>
          </form>
        </div>

        <div className="auth__right">
          <h2>Create an account</h2>
          <div className="auth__social">
            <p className="text-secondary">Use your Google account...</p>
            <i
              className="bi bi-google"
              style={{ cursor: 'pointer' }}
              onClick={handleGoogleLogin}
            ></i>
          </div>

          <p className="text-secondary m-0">...or fill out this form</p>
          <form onSubmit={handleRegister}>
            <input
              className="form__input"
              type="text"
              placeholder="Name"
              name="rname"
              value={rname}
              onChange={handleInputChange}
            />

            <input
              className="form__input"
              type="email"
              placeholder="Email"
              name="remail"
              value={remail}
              onChange={handleInputChange}
            />
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              name="rpassword"
              value={rpassword}
              onChange={handleInputChange}
            />
            <button className="button button-red" type="submit">
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
