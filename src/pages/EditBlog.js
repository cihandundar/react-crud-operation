import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserDetails, updateUser } from "../redux/userSlice";

const EditBlog = () => {
  const data = useSelector((state) => state?.users?.details);
  const status = useSelector((state) => state?.users?.status);
  const error = useSelector((state) => state?.users?.error);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState(``);
  const [surname, setSurname] = useState(``);
  const [job, setJob] = useState(``);
  const [details, setDetails] = useState(``);
  const [gender, setGender] = useState(``);
  const [email, setEmail] = useState(``);
  const [birthDate, setBirthDate] = useState(``);
  const navigate = useNavigate();

  const loadBlog = () => {
    setName(data.name);
    setSurname(data.surname);
    setDetails(data.details);
    setGender(data.gender);
    setEmail(data.email);
    setBirthDate(data.birthDate);
    setJob(data.job);
  };

  useEffect(() => {
    console.log("ifsiz status", status);
    if (status === "success") {
      loadBlog();
      console.log("ifli status calisti");
    }
  }, [status]);

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);
  console.log(id);
  const handleSubmit = (e) => {
    // const body = { id, name, surname, job, details, gender, email, birthDate };
    // console.log(body);
    e.preventDefault();
    dispatch(updateUser({ name }));

    // setTimeout(() => {
    //   navigate("/blog");
    // }, 1000);
  };

  return (
    <div className="container">
      {status === "failed" ? (
        <h1>Error</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e?.target?.value)}
              required
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              required
              type="text"
              value={surname}
              onChange={(e) => setSurname(e?.target?.value)}
            />
          </div>
          <div>
            <label>Job</label>
            <input
              required
              type="text"
              value={job}
              onChange={(e) => setJob(e?.target?.value)}
            />
          </div>
          <div>
            <label>Gender</label>
            <input
              required
              type="text"
              value={gender}
              onChange={(e) => setGender(e?.target?.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
          </div>
          <div>
            <label>BirthDate</label>
            <input
              required
              type="text"
              value={birthDate}
              onChange={(e) => setBirthDate(e?.target?.value)}
            />
          </div>
          <div>
            <label>Details</label>
            <textarea
              required
              value={details}
              onChange={(e) => setDetails(e?.target?.value)}
            />
          </div>
          <button>Add Blog</button>
        </form>
      )}
    </div>
  );
};

export default EditBlog;
