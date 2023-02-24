
// import UserTables from "components/UserTables";
import { users } from "../assets/userteams/userteams";
import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  Label,
  
} from "reactstrap";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function GenerateTeams(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="invite_modal"
    >
      <Modal.Header>
          <Modal.Title>Generate Teams</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prefix</Form.Label>
              <Form.Control
                type="text"
                placeholder="Team_"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Select Type</Form.Label>
              <Form.Select className="select">
                <option>Select Type</option>
                <option>Random</option>
                <option>Countries</option>
                <option>Mixed</option>
              </Form.Select>
            </Form.Group>

            <div className="grid modal_inputs">
              <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Select Random Type</Form.Label>
                <Form.Select className="select">
                  <option>Random Type</option>
                  <option>Numbers Only</option>
                  <option>Alphabets Only</option>
                  <option>Mixed</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Select Case</Form.Label>
                <Form.Select className="select">
                  <option>Select</option>
                  <option>Uppercase</option>
                  <option>Lowercase</option>
                  <option>Mixed Case</option>
                </Form.Select>
              </Form.Group>

            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Suffix</Form.Label>
              <Form.Control
                type="text"
                placeholder="_Team:_"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Seperator</Form.Label>
              <Form.Control
                type="text"
                placeholder="Default:_"
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
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Maximum Members</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>How Many Teams</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Generate Team
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
function BulkCreate(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="update_modal"
    >
      <Modal.Header className="update">
          <Modal.Title className="update">Bulk Create Teams</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      
      <Modal.Body className="update_modal_body">
          <Form>
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

            <div className="viewsample">View Sample File</div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Create Team
          </Button>
        </Modal.Footer>
        
    </Modal>
  );
}
function TeamCreate(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="update_modal"
    >
      <Modal.Header className="update">
          <Modal.Title className="update">Create Team</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      
      <Modal.Body className="update_modal_body">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Trojan"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              
              <div className="textarea">
                <textarea placeholder="Description" name="" id="" cols="30" rows="10"></textarea>
              </div>
            </Form.Group>




            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Maximum Members</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Create Team
          </Button>
        </Modal.Footer>
        
    </Modal>
  );
}
const UserTeams = ({ direction, ...args }) => {
  const [generateModal, generateTeamModal] = React.useState(false);
  const [createBulkModal, setBulkCreateModal] = React.useState(false);
  const [createTeamCreation, setTeamCreation] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [deleteMode, setdeleteMode] = React.useState(false);
  const [dropdownCreateOpen, setdropdownCreateOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleCreate = () => setdropdownCreateOpen((prevState) => !prevState);
  return (
    <>
      <div className="top_section create">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/Teams</small>
            </div>
          </div>

          <div className="right userTeams">
              
              <Dropdown isOpen={dropdownOpen} direction={direction} toggle={toggle}>
                <DropdownToggle caret>Actions</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem>Import</DropdownItem>
                  <DropdownItem>Print</DropdownItem>
                  <DropdownItem onClick={() => setdeleteMode(!deleteMode)}>Delete</DropdownItem>
                  <DropdownItem>Reset</DropdownItem>
                  <DropdownItem>Reload</DropdownItem>
                </DropdownMenu>
              </Dropdown>


              <Dropdown className="actions" isOpen={dropdownCreateOpen} direction={direction} toggle={toggleCreate}>
                <DropdownToggle className="actions" caret>Create</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem onClick={() => setTeamCreation(true)} >Create Single</DropdownItem>
                  <DropdownItem onClick={() => setBulkCreateModal(true)}>Bulk Create</DropdownItem>
                  <DropdownItem onClick={() => generateTeamModal(true)}>Generate Random</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              
            
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
                    {deleteMode ? <th scope="col"></th>: ''}
                    <th scope="col"> ID</th> 
                    <th scope="col">Name <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Description <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Invitation Token <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Max Members <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Members <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    {/* <th scope="col">Completion</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={index}>
                            {deleteMode ? <td ><input type="checkbox" name="" id="" /></td> : ''}
                            <td>{user.hngid}</td>
                            <td>{user.name}</td>
                            
                            <td>{user.desc}</td>
                            <td>
                                {user.inviToken}<i class="fa-solid fa-copy"></i>
                            </td>
                            <td>{user.MaxMembers}</td>
                            <td>{user.Members}</td>
                            <td className="text-right">
                               <div className="table_btns">
                                  <Link to="/admin/users-team/Team">
                                    <button><i class="fa-solid fa-eye"></i></button>
                                  </Link>
                                  
                               </div>
                            </td>
                        </tr>
                    ))}
                  
                </tbody>
              </Table>
               <GenerateTeams
                    show={generateModal}
                    onHide={() => generateTeamModal(false)}
                />
               <BulkCreate
                    show={createBulkModal}
                    onHide={() => setBulkCreateModal(false)}
                />
               <TeamCreate
                    show={createTeamCreation}
                    onHide={() => setTeamCreation(false)}
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

export default UserTeams;
