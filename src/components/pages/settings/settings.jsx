import "./settings.css";

import Sidebar from "../../sidebar/sidebar"
function Settings(){


    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                     <label>Profile Picture</label>
                     <div className="settingspic">
                        <img src="/img6.jpg" alt="settings-img" className="settingImg"/>
                        <label htmlFor="fileInput">
                        <i className="settingsPicIcon fa-solid fa-person-military-rifle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                     </div>
                     <label>Username</label>
                     <input type="text" placeholder="vicky"/>
                     <label>Email</label>
                     <input type="text" placeholder="eg@gm.com"/>
                     <label>Password</label>
                     <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
             <Sidebar/>
        </div>
    )
};

export default Settings;