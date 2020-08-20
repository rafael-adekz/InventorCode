import PropTypes from 'prop-types';
import React from 'react';
import { domOnlyProps } from '../../../utils/reduxFormUtils';

function LoginForm(props) {
  const {
    fields: { email, password }, handleSubmit, submitting, pristine
  } = props;

  let h3_error = <div></div>

  if(props.submitFailed){
    h3_error = <h3 style={{marginTop: '10px',color: '#f10046',fontWeight: 'bold'}}> <div>{props.errors?.email}</div> <div>{props.errors?.password}</div></h3>
  }

  return (
    <form className="form" onSubmit={handleSubmit(props.validateAndLoginUser.bind(this, props.previousPath))}>
      {h3_error}
     
      <p className="form__field">
        <label htmlFor="email" className="form__label">Email ou usuário</label>
        <input
          className="form__input"
          aria-label="email ou usuário"
          type="text"
          id="email"
          {...domOnlyProps(email)}
        />
        {email.touched && email.error && <span className="form-error">{email.error}</span>}
      </p>
      <p className="form__field">
        <label htmlFor="password" className="form__label">Senha</label>
        <input
          className="form__input"
          aria-label="senha"
          type="password"
          id="password"
          {...domOnlyProps(password)}
        />
        {password.touched && password.error && <span className="form-error">{password.error}</span>}
      </p>
      <input type="submit" disabled={submitting || pristine} value="Log In" aria-label="login" />    
    </form>
  );
}

LoginForm.propTypes = {
  fields: PropTypes.shape({
    email: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validateAndLoginUser: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  previousPath: PropTypes.string.isRequired
};

LoginForm.defaultProps = {
  submitting: false,
  pristine: true,
  invalid: false
};

export default LoginForm;
