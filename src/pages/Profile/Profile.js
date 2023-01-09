import React from "react";
import "./profile.scss";

const Profile = ({ userObj }) => {
  console.log(userObj);
  return (
    <div className="Profile">
      <div className="profile-infomation">
        <h2>
          안녕하세요 <span className="user-name">{userObj?.displayName}</span>
          님!
        </h2>
        <p className="contents">프론트엔드 개발자 신지훈 입니다</p>
        <p>에코앤리치 코딩과제에 사용한 기술은</p>
        <p>Firebase와 React 입니다</p>
        <div className="constents-images">
          <img className="image" src="./images/firebase.png" />
          <img className="image" src="./images/react.png" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
