import React from "react";

const FeedCard = ({ user }) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    skills,
    photo: photoUrl,
    about,
  } = user;

  return (
    <div className="flex justify-center   -z-20 ">
      <div className="card bg-base-200 w-96 shadow-xl ">
        <figure>
          <img src={photoUrl} alt="Profile_Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          {age && (
            <h3>
              <span className="font-semibold">Age:</span> {age}
            </h3>
          )}
          {gender && (
            <h3>
              <span className="font-semibold">Gender: </span>
              {gender}
            </h3>
          )}
          {about && (
            <h3 className="whitespace-normal break-words">
              <span className="font-semibold">About: </span>
              {about}
            </h3>
          )}
          {skills.length > 0 ? (
            <h3 className="whitespace-normal break-words">
              <span className="font-semibold">Skills: </span> {skills}{" "}
            </h3>
          ) : (
            <h3 className="font-semibold">No Skills Listed</h3>
          )}
          <div className="card-actions justify-evenly mt-4">
            <button className="btn btn-error">Ignore</button>
            <button className="btn btn-success">Intrested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
