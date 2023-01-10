import React, { useState } from "react";
import "./profile.scss";

const Profile = ({ userObj }) => {
  const [randomColor, setRandomColor] = useState(true);
  const onClickRandomColor = () => {
    const r = Math.floor(Math.random() * (256 - 0));
    const g = Math.floor(Math.random() * (256 - 0));
    const b = Math.floor(Math.random() * (256 - 0));
    return `rgb(${r}, ${g}, ${b})`;
  };
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
        <div className="constens-text">
          <div>
            교과 퍼블리싱을 배우고 독학을 통해 개발공부를 시작하여 코딩
            부트캠프를 무난히 수료 후 주니어 개발자로서 꾸준히 학습 하고
            있습니다
          </div>
          <div>
            운동을 통해 컨디션과 체력을 관리하고 스트레스를 조절하며 매사
            긍정적인 사고를 가지려 노력하고 있습니다
          </div>
          <div>코딩과제를 봐주셔서 감사드립니다</div>
        </div>
      </div>
      <div
        style={
          randomColor === true || false
            ? { backgroundColor: onClickRandomColor() }
            : null
        }
        className="econrich"
        onClick={() => {
          setRandomColor(!randomColor);
        }}
      >
        <div>Click!</div>
        <div>{onClickRandomColor()}</div>
      </div>
    </div>
  );
};

export default Profile;
