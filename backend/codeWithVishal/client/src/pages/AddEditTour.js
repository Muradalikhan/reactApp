import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBSpinner,
  MDBValidation,
  MDBInput,
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const intialValue = {
  title: "",
  description: "",
  tags: [],
};
const AddEditTour = () => {
  const [tourData, setTourData] = useState(intialValue);
  const { title, description, tags } = tourData;

  const handleSubmit = (e) => {
    e.preventDeault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };
  const handleAdd = (addTag) => {
    setTourData({ ...tourData, tags: [...tourData.tags, addTag] });
  };
  const handleDelete = (deleteTag) => {
    setTourData({
      ...tourData,
      tags: tourData.tags.filter((tag) => tag !== deleteTag),
    });
  };
  const handleClear = () => {
    setTourData({ title: "", description: "", tags: [] });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
        maxWidth: "500px",
        backgroundColor: "#ffff",
      }}
    >
      <MDBCard alignment="center">
        <MDBCardBody>
          <h5>Add Tour</h5>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <input
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
                className="form-control"
                required
                invalid
                validation="please enter the title"
              />
            </div>
            <div className="col-md-12">
              <textarea
                name="description"
                placeholder="description"
                rows={2}
                value={description}
                onChange={handleChange}
                className="form-control"
                required
                invalid
                validation="please enter the description"
              />
            </div>
            <div className="col-md-12">
              <ChipInput
                name="tags"
                variant="outlined"
                placeholder="tages"
                fullWidth
                value={tags}
                onAdd={(tags) => handleAdd(tags)}
                onDelete={(tags) => handleDelete(tags)}
              />
            </div>
            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTourData({ ...tourData, imageFile: base64 })
                }
              />
            </div>
            <div className="col-md-12">
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                onClick={handleSubmit}
                size="lg"
              >
                Submit
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                className="mt-2"
                onClick={handleClear}
                size="lg"
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddEditTour;
