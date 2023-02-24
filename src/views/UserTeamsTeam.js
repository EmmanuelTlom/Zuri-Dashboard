
// import UserTables from "components/UserTables";
import { users } from "../assets/__mocks__/users";
import React from "react";
// import { Link } from "react-router-dom";
import Topsettings from "components/settings/Topsettings";
import TeamUsers from 'components/TeamUsers'
import {
  Card,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Media,
  Row,
  
} from "reactstrap";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



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
          <Modal.Title>Team Settings</Modal.Title>
          <button onClick={props.onHide} className="modal_btn_close"><i class="fa-solid fa-xmark"></i></button>
      </Modal.Header>
      <Modal.Body>
          <div className="settingToggle_wraps">
            <Topsettings details={{ heading:'Voting', name: 'Members Voting', toggle: true }}/>
            <Topsettings details={{ heading:'Self Join', name: 'SelfJoin', toggle: true }}/>
          </div>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Settings
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

const UserTeamsTeam = ({ direction, ...args }) => {
  const [generateModal, generateTeamModal] = React.useState(false);
  return (
    <>
      <div className="top_section create">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/Teams/Trojan</small>
            </div>
          </div>

          <div className="right userTeams">
              <button className="carlender teamPage">
                Edit <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="carlender teamPage">
                Delete <i class="fa-solid fa-trash"></i>
              </button>
              <button className="carlender teamPage">
                Settings <i class="fa-solid fa-gear"></i>
              </button>
              <button onClick={() => generateTeamModal(true)} className="actions">
                Add Members <i class="fa-solid fa-plus"></i>
              </button>
          </div>
        </div>
      </div>

      <TeamUsers />

      {/* <UserTables/> */}
      <Row>
          <div className="col mt-4 px-5">
              <h4 className="team_mem">
                  Team  Members
              </h4>
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
                                    {user.name}
                                </span>
                                </Media>
                            </Media>
                            </th>
                            <td>{user.username}</td>
                            <td>
                                <i class="fa-solid fa-envelope"></i> <span>{user.email}</span>
                            </td>
                            <td className="role"><span>{user.role}</span></td>
                            
                        </tr>
                    ))}
                  
                </tbody>
              </Table>
               <GenerateTeams
                    show={generateModal}
                    onHide={() => generateTeamModal(false)}
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

export default UserTeamsTeam;
