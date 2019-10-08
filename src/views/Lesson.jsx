import React from "react";
import { Link } from 'react-router-dom';

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
  render() {
    return (
      <>
        <div className="content">
        <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Add New Lesson</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Name</label>
                          <Input type="text" placeholder="Enter Name"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update pr-2 ml-auto">
                      <Link to="./travel"><Button className="btn-round" color="danger" type="submit">
                          Cancel
                        </Button></Link>
                      </div>
                      <div className="update pr-2 pull-right">
                        <Button className="btn-round" color="success" type="submit">
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
