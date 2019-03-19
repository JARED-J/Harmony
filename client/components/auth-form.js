import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  return (
    <div>
      <div className="login-form">
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div,
        body > div > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign="center"
          style={{height: '100%'}}
          verticalAlign="middle"
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/favicon.ico" /> Log-in to your account
            </Header>
            <Form size="large" onSubmit={handleSubmit} name={name}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  htmlFor="email"
                  name="email"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  htmlFor="password"
                  name="password"
                />
                {displayName === 'Sign Up' ? (
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                  />
                ) : null}
                <Button color="teal" fluid size="large">
                  {displayName}
                </Button>
              </Segment>
            </Form>
            {displayName === 'Login' ? <SignUpLink /> : <LoginLink />}
            {error && error.response && errMess(error.response.data)}
            <a href="/auth/google">{displayName} with Google</a>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

const errMess = data => {
  return (
    <Message>
      <small>{data}</small>
    </Message>
  )
}

const SignUpLink = () => {
  return (
    <Message>
      <Link to="/signup">
        <small>Don't have an account?</small>
        <small>Click Here to sign up!</small>
      </Link>
    </Message>
  )
}

const LoginLink = () => {
  return (
    <Message>
      <Link to="/login">
        <small>Already Have an account?</small>
        <small>Click Here to login.</small>
      </Link>
    </Message>
  )
}
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
