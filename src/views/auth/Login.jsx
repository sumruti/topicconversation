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
              <h2 className="text-center">Sign In</h2>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card>     

              </Card>
            </Col>
            <Col md="6">
              <Card className="card-user">
                <CardBody>
                  <Form>
                    <Row>
                      
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>User email address</label>
                          <Input placeholder="User Email Address" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Password
                          </label>
                          <Input placeholder="Enter Password" type="password" />
                        </FormGroup>
                      </Col>
                    </Row>  
                    <Row>
                        <div className="update ml-auto mr-auto">
                            <Link to="./signup">New User? Sign Up Here</Link>
                        </div>
                    </Row>                  
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button color="dark" type="submit">
                          Log In
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