import React from "react";
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
                  <CardTitle tag="h5">Create Topic</CardTitle>
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
                      <Col md="12">
                        <FormGroup>
                          <label>Image Link</label>
                          <Input type="text" placeholder="Enter Image Link"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Group</label>
                          <Input type="text" placeholder="Enter Group"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update pr-2 ml-auto">
                        <Button className="btn-round" color="danger" type="submit">
                          Cancel
                        </Button>
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
