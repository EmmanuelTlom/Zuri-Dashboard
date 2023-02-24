
// import UserTables from "components/UserTables";
import { users } from "../assets/__mocks__/school";
import React from "react";
import { Link } from "react-router-dom";
import Switchcomponent from '../components/Switchcomponent'

import {
  Card,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
  FormGroup,
  Input,
  Label,
  
} from "reactstrap";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function CreateTrackModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="invite_modal"
    >
      <Modal.Header>
          <Modal.Title>Create Track</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                autoFocus
              />
            </Form.Group>

            <div className="ingeneral">
                <Form.Label>Is this a General Track</Form.Label>
                <div className="general_wrap">
                    <input
                    type="text"
                    placeholder="Turn on if this track is a general track"
                    autoFocus
                    />
                    <Switchcomponent />
                </div>
            </div>
            
            <FormGroup>
              <Label for="exampleFile">
                File
              </Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
              />
            </FormGroup>

            <div className="viewsample">Uploaded icon must be 256 x 256 px</div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Create Track
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
function CreatecourseModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="update_modal"
    >
      <Modal.Header className="update">
          <Modal.Title className="update">Create Course</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      
      <Modal.Body className="update_modal_body">
          
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Track</Form.Label>
                <Form.Select className="select">
                  <option>Select Track</option>
                  <option>Uppercase</option>
                  <option>Lowercase</option>
                  <option>Mixed Case</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduction to Python"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Difficulty</Form.Label>
                <Form.Select className="select">
                  <option>Select Difficulty Level</option>
                  <option>Uppercase</option>
                  <option>Lowercase</option>
                  <option>Mixed Case</option>
                </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Create Course
          </Button>
        </Modal.Footer>
        
    </Modal>
  );
}
const School = (props) => {
  const [courseModal, setcourseModal] = React.useState(false);
  const [CreateTrack, setCreateTrack] = React.useState(false);
  return (
    <>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>School/Tracks</small>
            </div>
          </div>

          <div className="right">
              <button onClick={() => setcourseModal(true)} className="carlender">
                Create Course 
              </button>
              <button onClick={() => setCreateTrack(true)} className="actions">
                Create Track <i class="fa-solid fa-plus"></i>
              </button>
          </div>
        </div>

        <div className="input_area mt-4">
            <div className="input_wrap">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search by title, track, category or course"/>
            </div>
        </div>

      </div>

      {/* <UserTables/> */}
      <Row>
          <div className="col mt-4 px-5">
            <Card className="shadow user_table">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Interns Enrolled</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                    {users.map((school,index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <th scope="row">
                            <Media className="align-items-center">
                                <a
                                className="avatar rounded-circle mr-1"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                >
                                <img
                                    alt="..."
                                    src={require("../assets/img/theme/bootstrap.jpg")}
                                />
                                </a>
                                <Media>
                                <span className="mb-0 text-sm">
                                    {school.name}
                                </span>
                                </Media>
                            </Media>
                            </th>
                            <td>{school.description}</td>
                            <td>{school.InternsEnrolled}</td>
                            <td className="text-right">
                               <div className="table_btns">
                                  <Link to="/admin/UserPage">
                                    <button><i class="fa-solid fa-pen-to-square"></i></button>
                                  </Link>
                                  <button><i class="fa-solid fa-trash"></i></button>
                               </div>
                            </td>
                        </tr>
                    ))}
                  
                </tbody>
              </Table>
               <CreatecourseModal
                    show={courseModal}
                    onHide={() => setcourseModal(false)}
                />
               <CreateTrackModal
                    show={CreateTrack}
                    onHide={() => setCreateTrack(false)}
                />
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
      </Row>

    </>
  );
};

export default School;
