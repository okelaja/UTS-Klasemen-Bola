import React, { useState } from "react";
import "./AddForm.css";

const AddBall = ( {onAddBall} ) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    abbr: "",
    logos: "",
  });

  const handleChange  = (e) => {
    const {name, value } = e.target;
    setFormData({
        ...formData,
        [name] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBall(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-right">
          <h1 className="form-title">Add Klasemen</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-inputgroup">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="slug" className="form-label">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                id="slug"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="abbr" className="form-label">
                Abbreviation
              </label>
              
              <input
                type="text"
                name="abbr"
                id="abbr"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="logos" className="form-label">
                Image
              </label>
              <input
                type="text"
                name="logos"
                id="logos"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddBall;
