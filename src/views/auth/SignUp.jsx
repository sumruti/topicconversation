import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3">
              <Card>

              </Card>
            </Col>
            <Col md="6">
              <h2 className="text-center">Sign Up</h2>
            </Col>
          </Row>
          <Row>
            <Col md="3">
            </Col>
            <Col md="6">
              <Card className="card-user">
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>User Email</label>
                          <Input placeholder="User Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Password</label>
                          <Input placeholder="Enter Password" type="password" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Repeat Password</label>
                          <Input placeholder="Repeat Password" type="password" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                        <div className="update ml-auto mr-auto">
                            <Link to="./login">Already a registered ? Login Here</Link>
                        </div>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button color="dark" type="submit">
                          Sign Up
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Login;