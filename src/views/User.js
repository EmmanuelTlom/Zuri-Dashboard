
import UserTables from "components/UserTables";

const User = (props) => {
  return (
    <>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>Users</p>
              <small>Users/All</small>
            </div>
          </div>

          <div className="right">
              <button className="carlender">
                Jan 7 - Feb 6 <i className="fa-solid fa-calendar-days"></i>
              </button>
              <button className="filter">
                <i className="fa-solid fa-filter"></i>
              </button>
              <button className="actions">
                Actions <i className="fa-solid fa-arrow-down"></i>
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

      <UserTables/>

    </>
  );
};

export default User;
