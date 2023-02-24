
// import UserTables from "components/UserTables";
import { userinvitations } from "../assets/__mocks__/userinvitations";
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
  Nav,
  NavItem,
  NavLink,
  Badge,
  TabContent,
  TabPane
} from "reactstrap";

const UserInvitations = (props) => {
  return (
    <>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/Invitations</small>
            </div>
          </div>

          <div className="right">
              <button className="actions">
                Invite Users <i class="fa-solid fa-plus"></i>
              </button>
          </div>
        </div>
      </div>
      <Nav className="tabs_nav" tabs>
            <NavItem>
                <NavLink
                    className="active tab__navlink"
                    onClick={function noRefCheck(){}}
                >
                    Pending Invitations <Badge
                        color="primary"
                        className="badgee"
                        pill
                    >
                        200
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className="tab__navlink"
                    onClick={function noRefCheck(){}}
                >
                    Accepted Invitations <Badge
                        color="primary"
                        className="badgee"
                        pill
                    >
                        120
                    </Badge>
                </NavLink>
            </NavItem>
      </Nav>

      <TabContent activeTab="1">
            <TabPane tabId="1">
                <Row>
                    <div className="col mt-4 px-5">
                        <Card className="shadow user_table">
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Invitation date</th>
                                <th scope="col">Invitation Status</th>
                                {/* <th scope="col">Completion</th> */}
                                <th scope="col" />
                            </tr>
                            </thead>
                            <tbody>
                                {userinvitations.map((user,index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <th scope="row">
                                            <span className="mb-0 text-sm">
                                            <i class="fa-solid fa-envelope"></i>  {user.email}
                                            </span>
                                        </th>
                                        <td>{user.role}</td>
                                        <td>
                                        <span>{user.invitationdate}</span>
                                        </td>
                                        <td><span className="invitationStatus">{user.invitationStatus}</span></td>
                                        <td className="text-right">
                                        <div className="table_btns">
                                            <Link to="/admin/UserPage">
                                                <button><i class="fa-solid fa-envelope"></i></button>
                                            </Link>
                                            
                                        </div>
                                        </td>
                                    </tr>
                                ))}
                            
                            </tbody>
                        </Table>
                        
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
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <div className="col mt-4 px-5">
                        <Card className="shadow user_table">
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Invitation date</th>
                                <th scope="col">Invitation Status</th>
                                {/* <th scope="col">Completion</th> */}
                                <th scope="col" />
                            </tr>
                            </thead>
                            <tbody>
                                {userinvitations.map((user,index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <th scope="row">
                                            <span className="mb-0 text-sm">
                                            <i class="fa-solid fa-envelope"></i>  {user.email}
                                            </span>
                                        </th>
                                        <td>{user.role}</td>
                                        <td>
                                        <span>{user.invitationdate}</span>
                                        </td>
                                        <td><span className="invitationStatus accepted">{user.invitationStatus}</span></td>
                                        <td className="text-right">
                                        <div className="table_btns">
                                            <Link to="/admin/UserPage">
                                                <button><i class="fa-solid fa-envelope"></i></button>
                                            </Link>
                                            
                                        </div>
                                        </td>
                                    </tr>
                                ))}
                            
                            </tbody>
                        </Table>
                        
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
            </TabPane>
        </TabContent>

      {/* <UserTables/> */}
      

    </>
  );
};

export default UserInvitations;
