
// import UserTables from "components/UserTables";
import React from "react";
import Tables from '../components/Tables'

import {
  Badge,
  
} from "reactstrap";


const News = (props) => {
  return (
    <>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <div>
              <p>News</p>
              <small>Hope you are having a great day?</small>
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
                Create New <i class="fa-solid fa-plus"></i>
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

      <div className="mt-5 new_table">
          <Tables/>

          <div className="right righty">
              <button><i class="fa-solid fa-magnifying-glass"></i></button>

              <div className="right_wrap">
                <div className="right_left">
                    <h4>It’s time to join slack!</h4>
                    <small>
                        Jan 17, 2022
                    </small>
                </div>

                <div className="right_right">
                    <Badge color="" className="badge-dot table_badge table_badge_green mr-1">
                        <i className="bg-warning" />
                        Uncategorized
                    </Badge>
                </div>
              </div>


              <p>Lorem ipsum dolor sit amet consectetur. Leo pellentesque dictum tristique scelerisque integer ultrices non. Mauris fringilla ultricies eget imperdiet ac leo facilisis. Augue velit vel natoque rhoncus bibendum nibh adipiscing quis sem. Feugiat nisl dolor elementum ac elementum senectus molestie aliquam rutrum. Pulvinar nec purus non lectus augue vitae velit nunc natoque. Faucibus lectus elit senectus ornare. Est porttitor faucibus porttitor et ultricies ut pharetra. Quam erat in tellus ut nibh amet lectus. Orci semper in consectetur lacus. Placerat sit massa at lacinia in mauris. Ac sagittis sed nisi orci lacinia.
                </p>

             <p>Lobortis etiam venenatis accumsan in. Urna in nisi tortor malesuada. Enim viverra malesuada erat est enim scelerisque. Non bibendum dignissim egestas ipsum turpis neque neque. Neque amet lorem tempor eros leo arcu lobortis. Etiam sit ipsum curabitur facilisis. Nibh morbi sit faucibus eros dolor sem integer venenatis. Ac vel faucibus netus donec. Turpis imperdiet magna auctor euismod elit mi. Netus ac iaculis faucibus et scelerisque sollicitudin mauris risus. Nisi vulputate in ut id malesuada enim a adipiscing. Ac pellentesque malesuada maecenas donec imperdiet vel vulputate. Pellentesque elit orci eu id. Commodo imperdiet massa quisque mattis adipiscing tristique aliquam. Vitae sit non rhoncus fermentum tellus justo tincidunt.</p>
          </div>
      </div>
    </>
  );
};

export default News;
