import React from "react";
import { Link } from 'react-router-dom';
import {register} from "../../api/api";
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

constructor() {
    super();
     this.state = {
       email:'',
       pass:''
      
    };

}

save(){
   register(this.state.email,this.state.pass)

   alert('Sign up successfully,Please login.');

}


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
                          <Input placeholder="User Email" type="email" onChange={(event) => this.setState({email: event.target.value})} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Password</label>
                          <Input placeholder="Enter Password" type="password" onChange={(event) => this.setState({pass: event.target.value})} />
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
                        <Button color="dark" type="button" onClick={(e)=>this.save(e)}>
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