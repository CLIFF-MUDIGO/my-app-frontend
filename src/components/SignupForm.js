import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [data, setData] = useState({
    name: '',
    age: '',
    id_number: '',
    gender: ''
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const navigate = useNavigate();

  const fetchStudents = () => {
    fetch("https://localhost:9292/students")
      .then(resp => resp.json())
      .then(updatedStudents => {
        setStudents(updatedStudents);
      })
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: data.name,
      age: data.age,
      id_number: data.id_number,
      gender: data.gender,
      status: "pending"
    };

    fetch("http://localhost:9292/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(resp => resp.json())
      .then((createdStudent) => {
        fetchStudents();
        setData({
          name: '',
          age: '',
          id_number: '',
          gender: ''
        });
        navigate(`/edit/${createdStudent.id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <form className="vh-100 gradient-custom" onSubmit={handleSubmit}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card">
              <div className="card-body">
                <h2 className="fw-bold mb-2 text-uppercase">Pre-Admission</h2>
                <p className="mb-5">Please enter your details accordingly...</p>

                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" value={data.name} onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" value={data.age} onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="id_number">ID number</label>
                  <input type="number" id="id_number" value={data.id_number} onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender e.g Male, Female</label>
                  <input type="text" id="gender" value={data.gender} onChange={handleChange} className="form-control" />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
