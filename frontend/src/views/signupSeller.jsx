import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpSeller() {
    return(
    <Form action="/signupSeller" method="post">
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Control type="email" placeholder="First Name" name="fname" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Control type="text" placeholder="Last Name" name="lname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Control type="text" placeholder="Last Name" name="lname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="shopAddress">
        <Form.Control type="text" placeholder="Shop address" name="saddress" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="gstNo">
        <Form.Control type="text" placeholder="GST NO." name="gstno" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mobileNo">
        <Form.Control type="text" placeholder="Mobile No." name="mobileno" />
      </Form.Group>
      <p>Agree with all the coditions of our ecommerce website</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUpSeller;