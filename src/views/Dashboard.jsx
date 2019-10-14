import React from "react";

import { Link } from 'react-router-dom';

import {get_lession,delete_lession,update_lession} from "../api/api";
import swal from 'sweetalert';
import Modal from 'react-bootstrap-modal';
import $ from 'jquery';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import 'font-awesome/css/font-awesome.min.css';

class Dashboard extends React.Component {

 constructor() {
    super();
     this.state = {
       lesson:'',
       lesson_name:'',
       lesson_id:'',
      
    };

}
componentDidUpdate() {

    var new_value = localStorage.getItem('new');
    var old_value = localStorage.getItem('new');

    //if(new_value == old_value){
      this.get_lessions(this.props.match.params.topic_id);
    //}

   
   
     
  }

  get_lessions(id){

   get_lession(id)
    
      .then(
        (result) => {
         console.log(result);
          this.setState({
            lesson: result.data.data,
          
          });
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  delete_lesson(id){
   

    swal({
        title: "Are you sure?",
        text: "You want to delete this lesson.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
          buttons: ["Cancel", "Yes"],
      })
      .then((willDelete) => {
        if (willDelete) {
              delete_lession(id);
             
              swal("Your Lesson deleted successfully!", {
              icon: "success",
              });
              setTimeout(
                  function() {
                     this.get_lessions(this.props.match.params.topic_id);
                  }
                  .bind(this),
                  2000
              );
               
        } 
      });
  
     
  
   
  }


  add_lesson(e){
    this.props.history.replace('/admin/lessons/'+this.props.match.params.topic_name+'/'+this.props.match.params.topic_id);
  }

 get_name(name,id){
    this.setState({lesson_name:name,lesson_id:id})
    
 }

 update(){
  var update =  update_lession(this.state.lesson_id,this.state.lesson_name,this.props.match.params.topic_id);

      update.then(function(data){

        if(data.data.status==true){
          swal({
            title: "Success!",
            text: "Lesson updated successfully!",
            icon: "success",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false 
          });

        }
      })

      setTimeout(
                  function() {
                      this.get_lessions(this.props.match.params.topic_id);
                  }
                  .bind(this),
                  2000
              );
 }


 view_sant(id,lesson_name){
    
     this.props.history.replace('/admin/view-Sentence/'+lesson_name+'/'+id);
 }

  render() {


  const { lesson } = this.state;



    return (
      <>
        <div className="content">
            

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Lesson</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                   <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" id="Name"  value={this.state.lesson_name} onChange={(event) => this.setState({lesson_name: event.target.value})}/>
                  </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e)=>this.update(e)}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          <Row>            
            <Col md="6" xs="6">
              <h3>{this.props.match.params.topic_name}</h3>
            </Col> 
            <Col md="6" xs="6">
              <div className="text-right">
              <a href={null} onClick={(e)=>this.add_lesson(e)} style={{cursor:"pointer"}}><h3>Lesson&nbsp;<i className="fa fa-plus-circle" /></h3></a>
              </div>
            </Col>                             
          </Row>
          {lesson !='' &&

            lesson.map((item, key) => (
              <Row key={key}>
                <Col lg="12" md="12" sm="12">
                  <Card className="card-stats">
                    <CardBody style={{height: '60px'}}>
                      <Row>
                        <Col md="1" xs="1">
                          <div className="text-center">
                            <label style={{color: '#111', fontSize: '23px'}}><i className="fa fa-list"/></label>
                          </div>
                        </Col>
                        <Col md="9" xs="9">
                          <div className="pull-left">
                          <a href={null} onClick={(e)=>this.view_sant(item.id,item.lesson_name)}><label style={{color: "#111", fontSize: '23px'}}>{item.lesson_name}
                            </label></a>

                            
                          </div>
                        </Col>
                        <Col md="1" xs="1">
                          <div className="text-center">
                            <label style={{color: '#111', fontSize: '23px',cursor:'pointer'}} className="text-danger" onClick={(e)=>this.delete_lesson(item.id)}> <i className="fa fa-trash"/></label>
                          </div>
                        </Col>
                        <Col md="1" xs="1">
                          <div className="text-center ">
                            <label style={{color: '#111', fontSize: '23px',cursor:'pointer'}} className="text-success " data-toggle="modal" data-target="#exampleModal" onClick={(e)=>this.get_name(item.lesson_name,item.id)}><i className="fa fa-edit"/></label>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>           
              </Row>    
             ))}

             {lesson =='' && lesson.length == 0 &&
             <Row>
                <Col lg="12" md="12" sm="12">
                  <CardBody>
                   <Row>
                        <Col md="12" xs="12">
                          <div className="text-center">
                            <label style={{color: '#111', fontSize: '23px'}}>No lesson found</label>
                          </div>
                        </Col>
                    </Row>        

                </CardBody>
                </Col>
               </Row>  
            }
        
        </div>
      </>
    );
  }
}

export default Dashboard;
