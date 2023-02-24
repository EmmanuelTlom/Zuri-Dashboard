import React from 'react'
import { Link } from 'react-router-dom'

function UsersSideBar() {
  return (
    <div className='UsersSideBar'>
        <div className="side">
            <Link to={'/admin/user'} className='active side_link'>
            <i class="fa-solid fa-chart-simple"></i> <span>Users</span>
            </Link>
            <Link to={'/admin/userStudents'} className='side_link' >
            <i class="fa-solid fa-user"></i> <span>Students</span>
            </Link>
            <Link to={'/admin/userTeams'} className='side_link' >
                <i class="fa-solid fa-users"></i> <span>Teams</span>
            </Link>
            <Link to={'/admin/userInvitations'} className='side_link' >
                <i class="fa-solid fa-user-plus"></i> <span>Invitations</span>
            </Link>
            <Link to={'/admin/pageuser'} className='side_link' >
                <i class="fa-solid fa-folder"></i> <span>User Profile</span>
            </Link>
        </div>
    </div>
  )
}

export default UsersSideBar