import "./styles.css";
import { UserData } from "./types";

function ProfileCard() {
  const userData: UserData = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };

  return (
    <div className="profile-card-wrapper">
      <img src={userData.avatar} alt={userData.userName} />
      <h3>{userData.userName}</h3>
      <p>
        <span className="property-name">Profession:</span> {userData.profession}
      </p>
      <p>
        <span className="property-name">Hobby:</span> {userData.hobbies[0]}
      </p>
    </div>
  );
}

export default ProfileCard;
