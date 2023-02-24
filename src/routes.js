
import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
import Settings from "views/Settings";
import User from "views/User";
import School from "views/School";
import Manage from "views/Manage";
import Posts from "views/Posts";
import Help from "views/Help";
import News from "views/News";
import Users from "views/Users";
import EditUsers from "views/EditUsers";
import UserTeams from "views/UserTeams";
import UserTeamsTeam from "views/UserTeamsTeam";
import UserInvitations from "views/UserInvitations";
import UsersSideBar from "views/UsersSideBar";
import UserStudents from "views/UserStudents";
import StudentUser from "views/StudentUser";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    showSide:true
  },
  {
    path: "/user",
    name: "Users",
    icon: "ni ni-single-02 text-pink",
    component: User,
    layout: "/admin",
     showSide:false
  },
  {
    path: "/UsersSideBar",
    name: "Users",
    icon: "ni ni-single-02 text-pink",
    component: UsersSideBar,
    layout: "/admin",
    showSide:true
  },
  {
    path: "/studentUser",
    name: "StudentUser",
    icon: "ni ni-single-02 text-pink",
    component: StudentUser,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/pageuser",
    name: "pageuser",
    icon: "ni ni-single-02 text-pink",
    component: Users,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/userStudents",
    name: "UserStudents",
    icon: "ni ni-single-02 text-pink",
    component: UserStudents,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/editUsers",
    name: "EditUsers",
    icon: "ni ni-single-02 text-pink",
    component: EditUsers,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/userTeams",
    name: "UserTeams",
    icon: "ni ni-single-02 text-pink",
    component: UserTeams,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/userInvitations",
    name: "UserInvitations",
    icon: "ni ni-single-02 text-pink",
    component: UserInvitations,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/users-team/Team",
    name: "UserTeamsTeam",
    icon: "ni ni-single-02 text-pink",
    component: UserTeamsTeam,
    layout: "/admin",
    showSide:false
  },
  {
    path: "/school",
    name: "School",
    icon: "fa-solid fa-user-group text-pink",
    component: School,
    layout: "/admin",
    showSide:true
  },
  {
    path: "/manage",
    name: "Manage",
    icon: "ni ni-single-copy-04 text-pink",
    component: Manage,
    layout: "/admin",
    showSide:true
  },
  {
    path: "/posts",
    name: "Posts",
    icon: "fa-solid fa-folder text-pink",
    component: Posts,
    layout: "/admin",
    showSide:true
  },
  {
    path: "/help",
    name: "Help",
    icon: "fa-solid fa-bell text-pink",
    component: Help,
    layout: "/admin",
    showSide:true
  },
  {
    path: "/news",
    name: "News",
    icon: "fa-solid fa-signal text-pink",
    component: News,
    layout: "/admin",
    showSide:true
  },

  {
    path: "/settings",
    name: "Settings",
    icon: "ni ni-settings-gear-65 text-pink",
    component: Settings,
    layout: "/admin",
    showSide:true
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
