
import image from '../assets/img/bgu.png'
import React from 'react';
import Notification from '../components/Notification'
import {Link} from 'react-router-dom'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from "reactstrap";
const Users = ({ direction, ...args }) => {
    const [dropdownCreateOpen, setdropdownCreateOpen] = React.useState(false);
  const toggleAction = () => setdropdownCreateOpen((prevState) => !prevState);
  return (
    <>
      <Notification message={'Your profile settings have been updated'}/>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/Profile</small>
            </div>
          </div>

          <div className="right">

              <Link to="/admin/editUsers">
                <button className="carlender">
                    Edit Profile <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </Link>
              
              {/* <button className="actions">
                Actions <i className="fa-solid fa-arrow-down"></i>
              </button> */}
              <Dropdown className="actions" isOpen={dropdownCreateOpen} direction={direction} toggle={toggleAction}>
                <DropdownToggle className="actions" caret>Actions</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem>Demote User</DropdownItem>
                  <DropdownItem>Course/Track</DropdownItem>
                  <DropdownItem>See Activities</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </div>
        </div>
      </div>


      <div className="usersProfile">
          <div className="usersProfile_wrap">

              <div className="left">
               <img alt="..." src={image}/>
                <div className="name">
                   <h1> Seyi (Xyluz) Onifade</h1>
                   <span className="role">
                       Super Admin
                   </span>
                </div>

                <h4>
                    About
                </h4>

                <p>At Zuri, we specialise in matching top-tier candidates with companies seeking to fill their open positions. We have a database of highly qualified and skilled professionals across various industries, and our team of expert recruiters is dedicated to finding the perfect fit for your organisation.</p>
              </div>

              <div className="right">
                  <div className="personal_info">
                     <h3>
                        Personal Information
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                                First Name
                            </h6>
                            <p>
                                Seyi
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Other Name
                            </h6>
                            <p>
                                Seyi
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Last Name
                            </h6>
                            <p>
                                Seyi
                            </p>
                        </div>
                    </div>
                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                                Username
                            </h6>
                            <p>
                                Xyluz
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Joined
                            </h6>
                            <p>
                                Mon 17, Oct 2022
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Last Active
                            </h6>
                            <p>
                                Tue 18, Oct 2022 10:10:57 AM
                            </p>
                        </div>
                    </div>
                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                                Email
                            </h6>
                            <p>
                                seyi@zuri.team
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Phone
                            </h6>
                            <p>
                                +23456768789
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Gender
                            </h6>
                            <p>
                                Male
                            </p>
                        </div>
                    </div>
                  </div>

                  <div className="personal_info">
                     <h3>
                       Course/Track
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                               Track
                            </h6>
                            <p>
                                FullStack Development
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Course
                            </h6>
                            <p>
                                Introuction to Python
                            </p>
                        </div>
                        
                    </div>
                  </div>
                  <div className="personal_info">
                     <h3>
                        Educational Information
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                               Highest Education
                            </h6>
                            <p>
                                Msc
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Other Diplomas
                            </h6>
                            <p>
                                Phd
                            </p>
                        </div>
                        
                    </div>
                  </div>
                  <div className="personal_info">
                     <h3>
                        Employment Information
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                               Employment Status
                            </h6>
                            <p>
                                Employed
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Employment Title
                            </h6>
                            <p>
                                Chief Technology Officer
                            </p>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Experience Level
                            </h6>
                            <p>
                                Senior
                            </p>
                        </div>
                    </div>
                    
                </div>
              </div>

          </div>

      </div>


    </>
  );
};

export default Users;
