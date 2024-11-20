import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constans";

const Login = () => {
  const [emailId, setEmailId] = useState("praveen@gmail.com");
  const [password, setPassword] = useState("Praveen@123");
  const dispatch = useDispatch();
  const handleLoginClick = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 w-96  shadow-xl">
        <div className="card-body">
          <h1 className="card-title  ">Login to TradeCircle</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="text"
              placeholder=""
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="Password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="card-actions justify-center mt-3">
            <button onClick={handleLoginClick} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
