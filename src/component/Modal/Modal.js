import React, { useState } from "react";
import "./Modal.css";
import { connect } from "react-redux";

function Modal(props) {
  const addNewBlog = () => {
    props.dispatch({ type: "ADDNEWBLOG", blogg: newBlog })
    setNewBlog({
      id: 0,
    category: "",
    filter: "",
    basliq: "",
    sekil: "",
    etrafli: "",
    })
  };
  const changeBlog = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value,id: new Date().getTime() });
  };
  const closeMODAL = () => {
    props.dispatch({ type: "MODAL", value: false });
  };
  const [newBlog, setNewBlog] = useState({
    id: 0,
    category: "",
    filter: "",
    basliq: "",
    sekil: "",
    etrafli: "",
  });
  
  return (
    <div className="modal" style={{ display: props.modal ? "flex" : "none" }}>
      <div className="close">
        <i
          style={{ fontSize: "1.3em", cursor: "pointer" }}
          onClick={closeMODAL}
          className="fas fa-times xcontrol"
        ></i>
      </div>
      <select
        value={newBlog.category}
        onChange={changeBlog}
        name="category"
        id="dsfsdfsd"
      >
        <option hidden defaultValue>
          Kategoriya
        </option>
        <option>Stil</option>
        <option>İdman</option>
        <option>Sağlıq</option>
      </select>
      <select
        value={newBlog.filter}
        onChange={changeBlog}
        name="filter"
        id="sfssadf"
      >
        <option hidden defaultValue>
          Filtr
        </option>
        <option>Hamısı Stil</option>
        <option>Hamısı İdman</option>
        <option>Hamısı Sağlıq</option>
      </select>
      <input
        onChange={changeBlog}
        value={newBlog.basliq}
        placeholder="basliq"
        type="text"
        name="basliq"
        id="sdfsdfsdfsd"
      />
      <input
        onChange={changeBlog}
        value={newBlog.sekil}
        placeholder="sekil"
        type="text"
        name="sekil"
        id="sdfsdfdsfdsf"
      />
      <textarea
        onChange={changeBlog}
        value={newBlog.etrafli}
        placeholder="etrafli"
        name="etrafli"
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
      <button
      disabled={Object.values(newBlog).every(a => a)?false:true}
        onClick={() => {
          addNewBlog();
          closeMODAL();
        }}
        id="btnelave"
      >
        Əlavə et
      </button>
    </div>
  );
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Modal);
