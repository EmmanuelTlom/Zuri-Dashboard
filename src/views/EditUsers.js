
import image from '../assets/img/bgu.png'
import { Link } from 'react-router-dom'

const EditUsers = (props) => {
  return (
    <>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/Profile</small>
            </div>
          </div>

          <div className="right">
              <Link to="/admin/pageuser">
                <button className="actions">
                    Save Changes <i class="fa-solid fa-file"></i>
                </button>
              </Link>
          </div>
        </div>
      </div>


      <div className="usersProfile">
          <div className="usersProfile_wrap">

              <div className="left">
               <img alt="..." src={image}/>

                <div className="edit_btn">
                    <button>
                        <i class="fa-solid fa-pen-to-square"></i> Edit Profile Image
                    </button>
                </div>
                <div className="edit_desc">
                    <h4>
                        About
                    </h4>

                    <p>At Zuri, we specialise in matching top-tier candidates with companies seeking to fill their open positions. We have a database of highly qualified and skilled professionals across various industries, and our team of expert recruiters is dedicated to finding the perfect fit for your organisation.</p>
                </div>
              </div>

              <div className="right">
                  <div className="personal_info">
                     <h3>
                        Personal Information
                    </h3>

                    <div className="details_wrap edit">
                        <div className="details_wrap_item">
                            <h6>
                                First Name
                            </h6>
                            <input type="text" placeholder='Seyi' />
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Other Name
                            </h6>
                            <input type="text" placeholder='Xyluz' />
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Last Name
                            </h6>
                            <input type="text" placeholder='Onifade'/>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Username
                            </h6>
                            <input type="text" placeholder='Xyluz'/>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Email
                            </h6>
                            <input type="email" placeholder='seyi@zuri.team'/>
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Phone
                            </h6>
                            <input type="tel" placeholder='+23456768789' />
                        </div>

                        
                        <div className="details_wrap_item">
                            <h6>
                                Gender
                            </h6>
                            <p>
                                <select name="" id="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </p>
                        </div>
                            
                    </div>
                  </div>

                  <div className="personal_info edu">
                     <h3>
                       Course/Track
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                               Track
                            </h6>
                            <input type="text" placeholder='FullStack Development' />
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Course
                            </h6>
                            <input type="text" placeholder='Introuction to Python' />
                        </div>
                        
                    </div>
                  </div>
                  <div className="personal_info edu">
                     <h3>
                        Educational Information
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                               Highest Education
                            </h6>
                            <input type="text" placeholder='Phd' />
                        </div>
                        <div className="details_wrap_item">
                            <h6>
                                Other Diplomas
                            </h6>
                            <input type="text" placeholder='Msc' />
                        </div>
                        
                    </div>
                  </div>
                  <div className="personal_info eduInfo">
                     <h3>
                        Employment Information
                    </h3>

                    <div className="details_wrap">
                        <div className="details_wrap_item">
                            <h6>
                               Employment Status
                            </h6>
                            <select name="" id="">
                                <option value="male">Employed</option>
                                <option value="female">Unemployed</option>
                                <option value="female">Self Employed</option>
                            </select>
                        </div>
                        
                        <div className="msc">
                            <div className="details_wrap_item">
                                <h6>
                                    Chief Technology Officer
                                </h6>
                                <input type="text" placeholder='Msc' />
                            </div>
                            <div className="details_wrap_item">
                                <h6>
                                    Experience Level
                                </h6>
                                <input type="text" placeholder='Senior' />
                            </div>
                        </div>
                    </div>
                    
                </div>
              </div>

          </div>

      </div>


    </>
  );
};

export default EditUsers;
