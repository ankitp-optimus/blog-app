import './settings.css'
import Sidebars from '../../components/sidebar/Sidebars'

const Setting = () => {
  return (
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="images.jpeg"
                alt=""
              />
              <label htmlFor="fileInput">
             <div className="settingsPPIcon"><ion-icon  name="person-circle-outline"></ion-icon></div> 
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Safak" name="name" />
            <label>Email</label>
            <input type="email" placeholder="safak@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        <Sidebars />
      </div>
    );
}

export default Setting
