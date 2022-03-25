import React, { useState } from "react";

function Input() {
  const [name, setName] = useState("");

  let handleChange = (e) => {
    // const re = /^[a-zA-Z0-9 \b]+$/;
    // if (e.target.value === "" || re.test(e.target.value)) {
    // }
    setName(e.target.value);
  };

  let showName = () => {
    let formatedName = name.replace(/[^a-zA-Z0-9]/g, "");
    console.log(formatedName);

    setName("");
  };
  return (
    <div>
      <p>Console only number and letters and remove special char</p>
      <input
        type="text"
        className="p-2"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button className="btn btn-dark p-2" onClick={showName}>
        Console
      </button>
    </div>
  );
}

export default Input;
