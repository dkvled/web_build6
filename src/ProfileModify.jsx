import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage.png';

function ProfileModify() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState(ProfileImage);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfilePicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className='page'>
      <div className="contentWrap">
        <label htmlFor="profile-picture">
          <img
            className="profile-picture"
            src={profilePicture}
            alt="Profile Picture"
          />
        </label>
        <input
          id="profile-picture"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfilePictureChange}
        />
        <div className="input-container">
          <label className="label">이름</label>
          <input
            className="input2"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-container">
          <label className="label">학번</label>
          <input
            className="input2"
            type="text"
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </div>
        <div className="input-container">
          <label className="label">자기소개</label>
          <textarea
            className="input2"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div className='button'>
        <button className="bottomButton">변경</button>
      </div>
    </div>
  );
}

export default ProfileModify;
