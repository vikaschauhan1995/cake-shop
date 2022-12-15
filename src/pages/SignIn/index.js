import React from 'react';
import { backgroundGradiant } from '../../style/styled_components/backgroundGradiant';
import '../../style/scss/SignIn.scss';
import { Link } from 'react-router-dom';

const SingIn = () => {
  return (
    <div className="signin" style={{ ...backgroundGradiant() }}>
      <div className="signin__container">
        <div>
          <h1>
            Welcome to SignIn Page
          </h1>
        </div>
        <div>
          <h4>Sign up from <Link to="/signup" className="text-decoration-none">here</Link></h4>
        </div>
      </div>
    </div>
  );
}

export default SingIn;