import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./landingPage.css"

function Login() {
  return(
    <Form action="/login" method="post" className='landingForm'>
      <h1 className='heading'>Login</h1>
      <Form.Group className="mb-3" controlId="LoginEmail">
        <Form.Control type="email" placeholder="Email address" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="LoginPassword">
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn'>
        Login
      </Button>
    </Form>
  );
}

export default Login;
    