import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constans";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const fetchFeed = async () => {
    try {
      if (!feedData || feedData === 0) {
        const res = await axios(BASE_URL + "/user/feed", {
          withCredentials: true,
        });
        dispatch(addFeed(res.data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feedData || feedData === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-28">
      <FeedCard user={feedData[0]} />
    </div>
  );
};

export default Feed;
