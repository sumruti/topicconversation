import React from "react";
import { Link } from 'react-router-dom';
import {lession} from "../api/api";
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
        Lesson:'',
        topic_id:'',
        
      };

    }

   save(e){
     var saved = lession(this.state.Lesson,this.props.match.params.topic_id);
      saved.then(function(data){

        if(data.data.status==true){
          swal({
            title: "Success!",
            text: "Lesson created successfully!",
            icon: "success",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false 
          });

        }
      })

      setTimeout(
                  function() {
                      this.props.history.replace('/admin/'+this.props.match.params.topic_name+'/'+this.props.match.params.topic_id);
                  }
                  .bind(this),
                  2000
              );
    
   }

   cancel(){
      this.props.history.replace('/admin/'+this.props.match.params.topic_name+'/'+this.props.match.params.topic_id);
   }

  render() {

    return (

      <>
        <div className="content">
        <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5"><b>{this.props.match.params.topic_name}</b> > Add New Lesson  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Name</label>
                          <Input type="text" placeholder="Enter Name"  onChange={(event) => this.setState({Lesson: event.target.value})}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update pr-2 ml-auto">
                      <Button className="btn-round" color="danger" type="button"  onClick={(e)=>this.cancel()}>
                          Cancel
                        </Button>
                      </div>
                      <div className="update pr-2 pull-right">
                        <Button className="btn-round" color="success" type="button" disabled={this.state.Lesson==''} onClick={(e)=>this.save(e)}>
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
