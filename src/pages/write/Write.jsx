import './write.css'

const Write = () => {
    return (
        <div className="write">
          <img
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <form className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <span className="writeIcon"><ion-icon name="add-outline"></ion-icon></span>
              </label>
              <input id="fileInput" type="file" style={{ display: "none" }} />
              <input
                className="writeInput"
                placeholder="Title"
                type="text"
                autoFocus={true}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
              />
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
      );
}

export default Write

