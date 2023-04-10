import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../redux/userSlice";

const BlogDetails = () => {
  const details = useSelector((state) => state?.users?.details);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.users?.isLoading);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="container">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="details">
            <div className="details-avatar">
              <img src={details?.avatar} alt="" />
            </div>
            <div className="details-title">
              <h2>{details?.name}</h2>
              <h2 style={{ marginLeft: "10px" }}>{details?.surname}</h2>
            </div>
            <div className="details-job">
              <h4>{details?.job}</h4>
            </div>
            <div className="details-email">
              <p>{details?.email}</p>
            </div>
            <div className="details-birthdate">
              <p>{details?.birthDate}</p>
            </div>

            <div className="details-text">
              <p>{details?.details}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
