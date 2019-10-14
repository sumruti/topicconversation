import React from "react";

import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import {users,get_groups,assign_groups,isadmin} from "../api/api";
import $ from 'jquery';


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
       users:'',
       groups:'',
       set_groups:'',
       user_id:''
      
    };

}

componentDidMount() {
   var user_id =   localStorage.getItem('i');
   this.get_users(user_id);
   this.getgroup();
   
     
  }





 get_users(id){

     users(id)
      .then(
        (result) => {
         console.log(result);
          this.setState({
            users: result.data.data,
          
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


 getgroup(id){

     get_groups()
      .then(
        (result) => {
         console.log(result);
          this.setState({
            groups: result.data.data,
          
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
              //delete_Sentence(id);
             
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

get_groups(event){
  this.setState({set_groups: event.target.value})
}


assign_group(){
  var groups = [];
   $.each($("input[name='group_name']:checked"), function(){
          groups.push($(this).val());
      });

      console.log(groups);

  var saved =  assign_groups(groups,this.state.user_id);
     saved.then(function(data){



      if(data.data.status==true){
         swal({
            title: "Success!",
            text: "Group assign successfully!",
            icon: "success",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false 
          });

       
        
      }
    })
}

user_id(user_id){
  console.log(user_id);
   this.setState({user_id: user_id})
}

get_checked_value(value){
  if(value){
    var users  = value.split(',');
     if (users.indexOf(this.state.user_id) > -1) {
            return true;
        }else{
            return false;
        }
  }
  
}

addisadmin(e,user_id,email){
  
   var saved =  isadmin(e.target.checked,user_id,email);

      saved.then(function(data){



      if(data.data.status==true){
       if(data.data.value== false){
         swal({
            title: "Success!",
            text: "User role changed to normal user successfully!",
            icon: "success",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false 
          });

       }else{
           swal({
            title: "Success!",
            text: "User role changed to admin successfully!",
            icon: "success",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false 
          });
       }
        
      }
    })
  
}

handleCheckBoxClick(){
  
}

  render() {

   var user_id =   localStorage.getItem('i');
   const {users,groups} = this.state;
   console.log(groups);
    return (
      <>
        <div className="content">
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Assign Group</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  
                   
                      <Row>
                    
                     {groups !='' &&

                        groups.map((item, key) => (
                        
                            <Col md="3" xs="3">
                                 <div className="form-group">
                                      <label htmlFor="recipient-name" className="col-form-label" style={{marginRight: "17px"}}>{item.group}:</label>
                                      <input type="checkbox"  id="group_name" name="group_name" value={item.group} checked={this.get_checked_value(item.users)} onChange={(e) => {this.handleCheckBoxClick(2, e.target.checked)}}/> 
                                   </div> 
                            </Col>
                            
                       
                        
                      ))} 
                       </Row>
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e)=>this.assign_group(e)}>Submit</button>
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
                                <h4> Users </h4>
                            </Col>
                            
                        </Row>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table  style={{overflow:"auto"}}>
                    <thead className="text-primary">
                      <tr>
                        <th>S.no</th>
                        <th>User Email</th>
                        <th>Is Admin</th>
                        <th>Groups</th>
                      </tr>
                    </thead>
                    <tbody>

                    {users !='' &&

                        users.map((item, key) => (
                          <tr>
                            <td>{key + 1}</td>
                            <td>{item.email} </td>
                            
                            <td><input type="checkbox" onClick={(e)=>this.addisadmin(e,item.id,item.email)} ref="check_me" defaultChecked={item.role == "admin"}/></td>
                             <td ><button type="button"   className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={(e)=>this.user_id(item.id)}>Assign Group</button></td>
                          </tr>
                     ))} 
                    
                    </tbody>
                  </Table>

                  {users =='' && 

                      

                           <Row>
                              <Col lg="12" md="12" sm="12">
                                <CardBody>
                                 <Row>
                                      <Col md="12" xs="12">
                                        <div className="text-center">
                                          <label style={{color: '#111', fontSize: '23px'}}>No users found</label>
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
