import React from "react";

import { Link , Redirect } from 'react-router-dom';
import swal from 'sweetalert';



import {Create_Topic} from "../api/api";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

import 'font-awesome/css/font-awesome.min.css';

class Topic extends React.Component {

 constructor() {
    super();
     this.state = {
      Name:'',
      ImageLink:'',
      Group:''
     
    };

  }

 save(e){
   var user_id =   localStorage.getItem('i');
   var saved = Create_Topic(this.state.Name,this.state.ImageLink,this.state.Group,user_id);
    saved.then(function(data){



      if(data.data.status==true){
        swal({
          title: "Topic!",
          text: "Created successfully!",
          icon: "success",
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false 
        });
      }
    })

 }

 


  render() {
      var role = localStorage.getItem('r');

    return (
      <>

        <div className="content">

     
        <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Create Topic</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Name</label>
                          <Input type="text" placeholder="Enter Name"  onChange={(event) => this.setState({Name: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Image Link</label>
                          <Input type="text" placeholder="Enter Image Link"  onChange={(event) => this.setState({ImageLink: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>

                   {role =="admin" || role =="superadmin"  && 
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Group</label>
                          <Input type="text" placeholder="Enter Group"  onChange={(event) => this.setState({Group: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    }
                    <Row>
                      <div className="update pr-2 ml-auto">
                     
                      </div>
                      <div className="update pr-2 pull-right">
                        <Button className="btn-round" color="success" type="button" disabled={  this.state.ImageLink =="" || this.state.Name == ""} onClick={(e)=>this.save(e)}>
                          Submit
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
        </div>
      </>
    );
  }
}

export default Topic;
