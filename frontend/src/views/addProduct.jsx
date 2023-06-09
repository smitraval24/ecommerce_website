import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduct() {
    return(
    <Form action="/addProduct" method="post">
      <Form.Group className="mb-3" controlId="productName">
        <Form.Control type="text" placeholder="Product Name" name="pname"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="productDesc">
        <Form.Control type="text" as="textarea" placeholder="Enter the product description" name="pdesc"/>
      </Form.Group>
      <div>
      <Form.Group className="mb-3" controlId="productCost">
        <Form.Control type="text" as="textarea" placeholder="Product cost in Indian Rupees" name="pcost"/>
      </Form.Group>
        <p>add images to be done</p>
        <h3>To add the product details in Tabular form</h3>
        <Form.Group className="mb-3" controlId="productCost">
          <Form.Control type="text" placeholder="title"/>
          <Form.Control type="text" placeholder="description"/>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" name="submit-action">
        add another product
        </Button>
      </div>
      <Button variant="primary" type="submit" name="submit-action">
        Submit
      </Button>
    </Form>
  );
}
              
export default AddProduct;