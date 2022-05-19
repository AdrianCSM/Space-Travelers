import React from 'react';
import Button from '../../components/button/Button';
import Badge from '../../components/badge/Badge';

const Profile = () => {
  const testStyle = 'bg-red-500';
  return (
    <div>
      <h1>My Profile</h1>
      <Button
        twClasses={testStyle}
        text="this is a test button"
        handleClick={() => {}}
        type="button"
      />
      <Badge twClasses="bg-blue-600" text="reservation" />
    </div>
  );
};

export default Profile;
