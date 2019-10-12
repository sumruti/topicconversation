import React from "react";
import { Link } from 'react-router-dom';
import {login} from "../../api/api";

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


login(){

  login(this.state.email,this.state.pass).then(
        (result) => {
         console.log(result.data.status)

         if(result.data.status==false){

           alert("Invalid login");

         }else{

            localStorage.setItem('r',result.data.data[0].role);
            localStorage.setItem('i',result.data.data[0].id);
            localStorage.setItem('e',result.data.data[0].email);

             this.props.history.replace('/admin/topics');
         }

        
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

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
                          <Input placeholder="User Email Address" type="email"  onChange={(event) => this.setState({email: event.target.value})} required/>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Password
                          </label>
                          <Input placeholder="Enter Password" type="password" onChange={(event) => this.setState({pass: event.target.value})} />
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
                        <Button color="dark" type="button" onClick={(e)=>this.login(e)} disabled={this.state.email == '' ||  this.state.pass==''}>
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