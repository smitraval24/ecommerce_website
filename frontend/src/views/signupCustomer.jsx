import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpCustomer() {
  return(
    <Form action="/signupCustomer" method="post">
      <Form.Group className="mb-3" controlId="signupFullName">
        <Form.Control type="email" name="fullname" placeholder="Full Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="permanentAddress">
        <Form.Control type="text" name="mobileno" placeholder="Mobile Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="permanentAddress">
        <Form.Control type="text" name="address" placeholder="Permanent Address" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUpCustomer;