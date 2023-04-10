import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, handleDelete } from "../redux/userSlice";

const UserList = () => {
  const data = useSelector((state) => state?.users?.data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.users?.isLoading);
  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleDeleteFunction = (id) => {
    dispatch(handleDelete(id));
  };

  return (
    <div>
      <div className="users">
        <h1>Users: {data.length}</h1>
      </div>
      <div className="container">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          data?.map((item) => (
            <div className="cart" key={item?.id}>
              <Link to={`/blog/${item?.id}`}>
                <div className="cart-title">
                  <h2>{item?.name}</h2>
                  <h2 style={{ marginLeft: "10px" }}>{item?.surname}</h2>
                </div>
                <div className="cart-job">
                  <span>{item?.job}</span>
                </div>
              </Link>
              <div className="cart-btn">
                <button
                  className="delete"
                  onClick={() => handleDeleteFunction(item?.id)}
                >
                  Delete
                </button>
                <Link to={`/edit-blog/${item.id}`}>
                  <button className="update">Update</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
