
import Topsettings from "components/settings/Topsettings";
const Settings = (props) => {

  return (
    <>
      <div className="top_sections my_container">
          <div className="settings_top">
              <h2>
                  Settings
              </h2>
              <p>
                  Settings / General
              </p>
          </div>

          <div className="settingToggle_wraps">
              <Topsettings details={{ heading:'Registration', name: 'Platform Registration', toggle: true }}/>
              <Topsettings details={{ heading:'Username', name: 'Username Update', toggle: true }}/>
              <Topsettings details={{ heading:'Program', name: 'Leave Program', toggle: false }}/>
              <Topsettings details={{ heading:'Transcript', name: 'Request Transcript', toggle: false }}/>
          </div>
      </div>

      <div>


      </div>
    </>
  );
};

export default Settings;
