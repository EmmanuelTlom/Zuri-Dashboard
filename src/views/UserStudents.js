
// import UserTables from "components/UserTables";
import { users } from "../assets/__mocks__/students";
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
  
} from "reactstrap";


const UserStudents = ({ direction, ...args }) => {
  const [dropdownCreateOpen, setdropdownCreateOpen] = React.useState(false);
  const toggleAction = () => setdropdownCreateOpen((prevState) => !prevState);
  return (
    <>
      <div className="top_section create">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/Students</small>
            </div>
          </div>

          <div className="right userTeams">
              <button className="carlender">
                    Reset <i class="fa-solid fa-repeat"></i>
              </button>
              <button className="carlender">
                    Reload <i class="fa-solid fa-repeat"></i>
              </button>
              <Dropdown className="actions" isOpen={dropdownCreateOpen} direction={direction} toggle={toggleAction}>
                <DropdownToggle className="actions" caret>Export</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem>Export All</DropdownItem>
                  <DropdownItem>Export  by Track</DropdownItem>
                  <DropdownItem>Export  by Team</DropdownItem>
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
                    <th scope="col"> Student ID</th> 
                    <th scope="col">Name <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Track</th>
                    <th scope="col">Email <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Points <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Task Points <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    <th scope="col">Points <i class="fa-solid fa-percent"></i> <span className="ml-1"><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i></span></th>
                    {/* <th scope="col">Completion</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={index}>
                           
                            <td>{user.hngid}</td>
                            <td>{user.name}</td>
                            
                            <td>{user.track}</td>
                            <td>
                               <i class="fa-solid fa-envelope"></i> {user.email}
                            </td>
                            <td>{user.points}</td>
                            <td>{user.taskPts}</td>
                            <td>{user.taskPtspercent}</td>
                            <td className="text-right">
                               <div className="table_btns">
                                  <Link to="/admin/studentUser">
                                    <button><i class="fa-solid fa-eye"></i></button>
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

    </>
  );
};

export default UserStudents;
