import React from "react";

import { Link } from 'react-router-dom';

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
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                    <CardTitle>
                        <Row>
                            <Col md="8" xs="6">
                                <h4> Selected Lesson - Nationalities </h4>
                            </Col>
                            <Col md="4" xs="6">
                                <div className="text-right">
                                    <Link to="./add-sentence">
                                        <h4>Sentence&nbsp;<i className="fa fa-plus-circle" /></h4>
                                    </Link>
                                </div>
                            </Col>  
                        </Row>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Sentence</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>User 1</td>
                        <td>English</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-right">
                            <label style={{color: '#111', fontSize: '23px'}}>
                                <i className="fa fa-edit text-success"></i>
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label style={{color: '#111', fontSize: '23px'}}>
                                <i className="fa fa-trash text-danger"></i>
                            </label>
                        </td>
                      </tr>
                      <tr>
                        <td>User 2</td>
                        <td>English</td>
                        <td>Lorem Ipsum</td>
                        <td className="text-right">
                            <label style={{color: '#111', fontSize: '23px'}}>
                                <i className="fa fa-edit text-success"></i>
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label style={{color: '#111', fontSize: '23px'}}>
                                <i className="fa fa-trash text-danger"></i>
                            </label>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
