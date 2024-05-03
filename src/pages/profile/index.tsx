import "../../sass/Profile.scss";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-avatar">
        <img src="https://via.placeholder.com/150" alt="Avatar" />
      </div>
      <div className="profile-info">
        <label>Full Name:</label>
      </div>
      <div className="profile-info">
        <label>Email:</label>
      </div>
      <div className="profile-info">
        <label>Phone Number:</label>
      </div>
    </div>
  );
};

export default Profile;
