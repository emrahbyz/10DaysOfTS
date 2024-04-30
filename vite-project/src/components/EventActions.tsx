import React, { useState } from "react";

const EventActions = () => {
  const [value, setValue] = useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("Button clicked with id:", id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div>
      <button></button>
      <button onClick={(event) => handleClick(event, 4)}>Sil</button>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default EventActions;
