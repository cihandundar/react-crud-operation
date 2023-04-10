import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../redux/userSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(``);
  const [surname, setSurname] = useState(``);
  const [job, setJob] = useState(``);
  const [details, setDetails] = useState(``);
  const [gender, setGender] = useState(``);
  const [email, setEmail] = useState(``);
  const [birthDate, setBirthDate] = useState(``);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const body = { name, surname, job, details, gender, email, birthDate };
    e.preventDefault();
    dispatch(addNewUser(body));
    setTimeout(() => {
      navigate("/blog");
    }, 2000);
    console.log(body);
  };

  return (
    <div className="container">
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
    </div>
  );
};

export default AddBlog;
