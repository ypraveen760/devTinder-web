import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constans";
import { useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("praveen@gmail.com");
  const [password, setPassword] = useState("Praveen@123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Somthing Went Wrong!");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-36">
      <div className="card bg-base-200 w-96  shadow-xl">
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
              type="text"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <p className="text-red-500">{error}</p>
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
