import React from "react";

import { Link } from 'react-router-dom';

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
  render() {
    return (
      <>
        <div className="content">
          <Row>            
            <Col md="6" xs="6">
              <h3>Travel</h3>
            </Col> 
            <Col md="6" xs="6">
              <div className="text-right">
              <Link to="./lessons"><h3>Lesson&nbsp;<i className="fa fa-plus-circle" /></h3></Link>
              </div>
            </Col>                             
          </Row>
          <Row>
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
                      <Link to="./view-lessons"><label style={{color: "#111", fontSize: '23px'}}>Nationalities
                        </label></Link>

                        
                      </div>
                    </Col>
                    <Col md="1" xs="1">
                      <div className="text-center">
                        <label style={{color: '#111', fontSize: '23px'}} className="text-danger"><i className="fa fa-trash"/></label>
                      </div>
                    </Col>
                    <Col md="1" xs="1">
                      <div className="text-center ">
                        <label style={{color: '#111', fontSize: '23px'}} className="text-success"><i className="fa fa-edit"/></label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>           
          </Row>    
          <Row>
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
                        <label style={{color: "#111", fontSize: '23px'}}>Nationalities
                        </label>
                      </div>
                    </Col>
                    <Col md="1" xs="1">
                      <div className="text-center">
                        <label style={{color: '#111', fontSize: '23px'}} className="text-danger"><i className="fa fa-trash"/></label>
                      </div>
                    </Col>
                    <Col md="1" xs="1">
                      <div className="text-center ">
                        <label style={{color: '#111', fontSize: '23px'}} className="text-success"><i className="fa fa-edit"/></label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>           
          </Row> 
          <Row>
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
                        <label style={{color: "#111", fontSize: '23px'}}>Nationalities
                        </label>
                      </div>
                    </Col>
                    <Col md="1" xs="1">
                      <div className="text-center">
                        <label style={{color: '#111', fontSize: '23px'}} className="text-danger"><i className="fa fa-trash"/></label>
                      </div>
                    </Col>
                    <Col md="1" xs="1">
                      <div className="text-center ">
                        <label style={{color: '#111', fontSize: '23px'}} className="text-success"><i className="fa fa-edit"/></label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>           
          </Row> 
        </div>
      </>
    );
  }
}

export default Dashboard;
