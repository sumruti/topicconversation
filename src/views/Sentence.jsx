import React from "react";
import { Link } from 'react-router-dom';
import {add_lesson_sentence} from "../api/api";
import swal from 'sweetalert';

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
       name:'',
       language:'',
       sentence:'',
      
    };

}

 cancelSentance(e){
  
   this.props.history.replace('/admin/view-Sentence/'+this.props.history.location.pathname.split("/")[3]+'/'+this.props.history.location.pathname.split("/")[4]);
 }

 saveSentance(){
   var saved = add_lesson_sentence(this.state.name,this.state.language,this.state.sentence,this.props.history.location.pathname.split("/")[4]);

   saved.then(function(data){



      if(data.data.status==true){
        swal({
          title: "Success!",
          text: "Sentence created successfully!",
          icon: "success",
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false 
        });
      }
    })
    setTimeout(
        function() {
           this.props.history.replace('/admin/view-Sentence/'+this.props.history.location.pathname.split("/")[3]+'/'+this.props.history.location.pathname.split("/")[4]);
        }
        .bind(this),
        2000
    );
   
 }


  render() {
    return (
      <>
        <div className="content">
        <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Add New Sentence</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Name</label>
                          <Input type="text" placeholder="Enter Name" onChange={(event) => this.setState({name: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Language</label>
                          <Input type="text" placeholder="Enter Language" onChange={(event) => this.setState({language: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Sentence</label>
                          <Input type="text" placeholder="Enter Sentence" onChange={(event) => this.setState({sentence: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update pr-2 ml-auto">
                    <Button className="btn-round" color="danger" type="button" onClick={(e)=>this.cancelSentance(e)}>
                          Cancel
                        </Button>
                      </div>
                      <div className="update pr-2 pull-right">
                        <Button className="btn-round" color="success" type="button" onClick={(e)=>this.saveSentance(e)} disabled={this.state.name == "" || this.state.language == "" || this.state.sentence == ""}>
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
