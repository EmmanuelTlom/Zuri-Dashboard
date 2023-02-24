import React from "react";
import { users } from "../assets/__mocks__/users";
import {
  Card,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
  
} from "reactstrap";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function InviteUserModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="invite_modal"
    >
      <Modal.Header>
          <Modal.Title>Invite User(s)</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      <Modal.Body>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Select User Role</Form.Label>
              <Form.Select className="select">
                <option>Select Role</option>
                <option>select</option>
                <option>select</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Valid For</Form.Label>
              <Form.Select>
                <option>3 Days</option>
                <option>select</option>
                <option>select</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Invite
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
function UpdateUserModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="update_modal"
    >
      <Modal.Header className="update">
          <Modal.Title className="update">Update User</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      
      <Modal.Body className="update_modal_body">
          <p>Change permissions and reset user passwords</p>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Change Role</Form.Label>
              <div className="wrap_input">
                  <Form.Select className="select">
                        <option>Mentor</option>
                        <option>select</option>
                        <option>select</option>
                  </Form.Select>
                  <button>Update</button>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>

              <div className="wrap_input">
                <Form.Control
                    type="password"
                    placeholder="***********"
                    autoFocus
                />
                 <button>Reset</button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        
    </Modal>
  );
}

// core components
const UserTables = () => {
    const [inviteModal, setInviteModal] = React.useState(false);
    const [updateUserModal, setUpdateUserModal] = React.useState(false);
  return (
    <>
        <Row>
          <div className="col mt-4 px-5">
            <Card className="shadow user_table">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    {/* <th scope="col">Completion</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr>
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
                                    {user.name}
                                </span>
                                </Media>
                            </Media>
                            </th>
                            <td>{user.username}</td>
                            <td>
                                <i class="fa-solid fa-envelope"></i> <span>{user.email}</span>
                            </td>
                            <td>{user.role}</td>
                            <td className="text-right">
                               <div className="table_btns">
                                   <button><i class="fa-solid fa-eye"></i></button>
                                   <button onClick={() => setUpdateUserModal(true)}><i class="fa-solid fa-pen-to-square"></i></button>
                               </div>
                            </td>
                        </tr>
                    ))}
                  
                </tbody>
              </Table>
               <InviteUserModal
                    show={inviteModal}
                    onHide={() => setInviteModal(false)}
                />
               <UpdateUserModal
                    show={updateUserModal}
                    onHide={() => setUpdateUserModal(false)}
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

export default UserTables;
