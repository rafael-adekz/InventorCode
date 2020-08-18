import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import InlineSVG from 'react-inlinesvg';
import { reduxForm } from 'redux-form';
import * as UserActions from '../actions';
import SignupForm from '../components/SignupForm';
import { validateSignup } from '../../../utils/reduxFormUtils';

const exitUrl = require('../../../images/exit.svg');
const logoUrl = require('../../../images/new2/logo.svg');

class SignupView extends React.Component {
  constructor(props) {
    super(props);
    this.closeSignupPage = this.closeSignupPage.bind(this);
    this.gotoHomePage = this.gotoHomePage.bind(this);
  }

  closeSignupPage() {
    browserHistory.push(this.props.previousPath);
  }

  gotoHomePage() {
    browserHistory.push('/');
  }

  render() {
    if (this.props.user.authenticated) {
      this.gotoHomePage();
      return null;
    }
    return (
      <div className="form-container">
        <Helmet>
          <title>InventorBox Signup</title>
        </Helmet>
        <div className="form-container__header">
          <button className="form-container__logo-button" onClick={this.gotoHomePage}>
            <InlineSVG src={logoUrl} alt="p5js Logo" />
          </button>
          <button className="form-container__exit-button" onClick={this.closeSignupPage}>
            <InlineSVG src={exitUrl} alt="Close Signup Page" />
          </button>
        </div>
        <div className="form-container__content">
          <h2 className="form-container__title">Registrar</h2>
          <SignupForm {...this.props} />
         {/**<p className="form__navigation-options">
            Already have an account?&nbsp;
            <Link className="form__login-button" to="/login">Log In</Link>
          </p> */} 
        </div>
      </div>
    );
  }
}

function asyncErrorsSelector(formName, state) {
  const form = state.form[formName];
  if (!form) {
    return {};
  }

  const fieldNames = Object.keys(form).filter(key => !key.startsWith('_'));
  return fieldNames.reduce((asyncErrors, fieldName) => {
    if (form[fieldName].asyncError) {
      return { ...asyncErrors, [fieldName]: form[fieldName].asyncError };
    }
    return asyncErrors;
  }, {});
}

function mapStateToProps(state) {
  return {
    user: state.user,
    previousPath: state.ide.previousPath,
    asyncErrors: asyncErrorsSelector('signup', state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

function asyncValidate(formProps, dispatch, props) {
  const errors = {};
  return Promise.resolve(true)
    .then(() => {
      const fieldToValidate = props.form._active;
      if (fieldToValidate) {
        const queryParams = {};
        queryParams[fieldToValidate] = formProps[fieldToValidate];
        queryParams.check_type = fieldToValidate;
        return axios.get('/api/signup/duplicate_check', { params: queryParams })
          .then((response) => {
            if (response.data.exists) {
              errors[fieldToValidate] = response.data.message;
            }
          });
      }
      return null;
    })
    .then(() => {
      const err = { ...errors, ...props.asyncErrors };
      if (Object.keys(err).length > 0) {
        throw err;
      }
    });
}

function onSubmitFail(errors) {
  console.log(errors);
}

SignupView.propTypes = {
  previousPath: PropTypes.string.isRequired,
  user: {
    authenticated: PropTypes.bool
  }
};

SignupView.defaultProps = {
  user: {
    authenticated: false
  }
};

export default reduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'confirmPassword'],
  onSubmitFail,
  validate: validateSignup,
  asyncValidate,
  asyncBlurFields: ['username', 'email']
}, mapStateToProps, mapDispatchToProps)(SignupView);
