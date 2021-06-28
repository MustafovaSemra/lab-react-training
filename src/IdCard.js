import React from 'react';

function IdCard({ picture, lastName, firstName, gender, height, birth }) {
  return (
    <div>
      <img src={picture} />
      <p>First name:{firstName}</p>
      <p>Last name:{lastName}</p>
      <p>Gender:{gender}</p>
      <p>Height:{height}</p>
      <p>DOB:{birth.toDateString()}</p>
    </div>
  );
}

export default IdCard;
