import "./visitProfile.css";
import CustomAppBar from "../components/CustomAppBar";

function VisitProfile({ setPage }) {
  return (
    <>
      <CustomAppBar />
      <div className="VisitProfile-cover-photo"></div>
      <div className="profile-section">
        <div className="profile-picture">
          <img src="/gorilla2.jpeg" alt="Profile" />
        </div>
      </div>
      <div className="profile-name">
        {" "}
        {/* Add this div for the name */}
        <h2 style={{ color: "white" }}>{"Gorrila Boy"}</h2>{" "}
        {/* Display the name */}
      </div>
      <div className="description-section">
        <textarea
          className="description-edit"
          value={"Welcome to my profile! I interested in VR and AR technologies. I love playing VR games especially gorilla tag. "}
          // I want to make this view only
          readOnly
        />
      </div>
    </>
  );
}

export default VisitProfile;
