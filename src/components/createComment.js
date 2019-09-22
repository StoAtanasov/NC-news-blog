import React, { Component } from "react";
import { Button, Form} from "react-bootstrap";
class CreateComment extends Component {
  state = {
    body: "",
    error: null
  };
  render() {
    const { body } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            name="body"
            value={body}
            onChange={this.handleChange}
            as="textarea"
            rows="5"
            colunm="10"
            placeholder="Enter your comment here"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const {body} = this.state;
    const { loggedInUser, postComment } = this.props;
    event.preventDefault()
    postComment(body, loggedInUser);
    this.setState({body: ""})
  }
}

export default CreateComment;
