import React, { useState } from "react";
import EditForm from './EditForm';

function SignupForm() {
  const [data, setData] = useState({
    name: '',
    age: '',
    id_number: '',
    gender: ''
  });

  const [showEditForm, setShowEditForm] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the signup form logic here...

    // Set showEditForm to true to display the EditForm
    setShowEditForm(true);

    setData({
      name: '',
      age: '',
      id_number: '',
      gender: ''
    });
  };

  return (
    <form className="vh-100 gradient-custom" onSubmit={handleSubmit}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Pre-Admission</h2>
                  <p className="text-white-50 mb-5">Please enter your details accordingly...</p>
                  <div className="form-outline form-white mb-4">
                    <input type="text" id="name" value={data.name} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="name">Your name</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="number" id="age" value={data.age} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="age">Age</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="number" id="id_number" value={data.id_number} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="id_number">ID number</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="text" id="gender" value={data.gender} onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="gender">Gender e.g Male, Female</label>
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the EditForm if showEditForm is true */}
      {showEditForm && <EditForm />}
    </form>
  );
}

export default SignupForm;
