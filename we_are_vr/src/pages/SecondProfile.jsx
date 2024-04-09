import "./SecondProfile.css";
import CustomAppBar from "../components/CustomAppBar";

function SecondProfile({ setPage }) {
  return (
    <>
      <CustomAppBar />
      <div className="VisitProfile-cover-photo"></div>
      <div className="profile-section">
        <div className="profile-picture">
          <img src="/gorilla3.webp" alt="Profile" />
        </div>
      </div>
      <div className="profile-name">
        {" "}
        {/* Add this div for the name */}
        <h2 style={{ color: "white" }}>{"Gorrila Kid"}</h2>{" "}
        {/* Display the name */}
      </div>
      <div className="description-section">
        <textarea
          className="description-edit"
          value={"Welcome to my profile! Please follow me on youtube"}
          // I want to make this view only
          readOnly
        />
      </div>
    </>
  );
}

export default SecondProfile;
