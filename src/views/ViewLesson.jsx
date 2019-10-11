import React from "react";

import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import {get_Sentence,delete_Sentence,update_Sentence} from "../api/api";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
constructor() {
    super();
     this.state = {
       name:'',
       language:'',
       sentences:'',
       Sentence:'',
      
    };

}

componentDidMount() {

   this.get_Sentences(this.props.match.params.lesson_id);
   
     
  }

 
 addSentance(){

   this.props.history.replace('/admin/add-Sentence/'+this.props.match.params.lesson_name+'/'+this.props.match.params.lesson_id);
 }



 get_Sentences(id){

     get_Sentence(id)
    
      .then(
        (result) => {
         console.log(result);
          this.setState({
            Sentence: result.data.data,
          
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

delete_sentence(id){
  
   swal({
        title: "Are you sure?",
        text: "You want to delete this sentence.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
          buttons: ["Cancel", "Yes"],
      })
      .then((willDelete) => {
        if (willDelete) {
              delete_Sentence(id);
             
              swal("Your sentence deleted successfully!", {
              icon: "success",
              });
              setTimeout(
                  function() {
                     this.get_Sentences(this.props.match.params.lesson_id);
                  }
                  .bind(this),
                  2000
              );
               
        } 
      });
}


get_name(name,language,sentence,Sentence_id){
   this.setState({
     name:name,
     sentences:sentence,
     language:language,
     Sentence_id:Sentence_id
   })



}


update(){
  
var update =   update_Sentence(this.state.Sentence_id,this.state.name,this.state.sentences,this.state.language,this.props.match.params.lesson_id);
   update.then(function(data){

        if(data.data.status==true){
          swal({
            title: "Success!",
            text: "Sentence updated successfully!",
            icon: "success",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false 
          });

        }
      })

      setTimeout(
                  function() {
                     this.get_Sentences(this.props.match.params.lesson_id);
                  }
                  .bind(this),
                  2000
              );
}



  render() {

   const { Sentence,name,sentences,language} = this.state;
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
                    <input type="text" className="form-control" id="Name"  value={name} onChange={(event) => this.setState({name: event.target.value})}/>
                  </div>

                   <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Language:</label>
                    <input type="text" className="form-control" id="Name"  value={language} onChange={(event) => this.setState({language: event.target.value})}/>
                  </div>

                   <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Sentence:</label>
                    <input type="text" className="form-control" id="Name"  value={sentences} onChange={(event) => this.setState({sentences: event.target.value})}/>
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
            <Col md="12">
              <Card>
                <CardHeader>
                    <CardTitle>
                        <Row>
                            <Col md="8" xs="6">
                                <h4> Selected Lesson - {this.props.match.params.lesson_name} </h4>
                            </Col>
                            <Col md="4" xs="6">
                                <div className="text-right">
                                    <a herf={null} onClick={(e)=>this.addSentance(e)} style={{cursor:"pointer"}}>
                                        <h4>Sentence&nbsp;<i className="fa fa-plus-circle" /></h4>
                                    </a>
                                </div>
                            </Col>  
                        </Row>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table  style={{overflow:"auto"}}>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Sentence</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                    {Sentence !='' &&

                        Sentence.map((item, key) => (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.language}</td>
                            <td>{item.sentence}</td>
                            <td className="text-right">
                             <label style={{color: '#111', fontSize: '23px',cursor :"pointer"}} onClick={(e)=>this.delete_sentence(item.id)}>
                                    <i className="fa fa-trash text-danger"></i>
                                </label>
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                                <label style={{color: '#111', fontSize: '23px',cursor :"pointer"}} data-toggle="modal" data-target="#exampleModal" onClick={(e)=>this.get_name(item.name,item.language,item.sentence,item.id)}>
                                    <i className="fa fa-edit text-success"></i>
                                </label>
                               
                               
                            </td>
                          </tr>
                     ))} 
                    
                    </tbody>
                  </Table>

                  {Sentence =='' && 

                      

                           <Row>
                              <Col lg="12" md="12" sm="12">
                                <CardBody>
                                 <Row>
                                      <Col md="12" xs="12">
                                        <div className="text-center">
                                          <label style={{color: '#111', fontSize: '23px'}}>No sentences found</label>
                                        </div>
                                      </Col>
                                  </Row>        

                              </CardBody>
                              </Col>
                             </Row>  
                       }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
