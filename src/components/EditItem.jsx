import { useState } from "react";

function EditItem({ data, changeIsEdit, calc }) {
  const [value, setValue] = useState(data.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    calc(data.id, value);
    setValue("");
  };
  return (
    <div>
      <label>{data.name}</label>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button onClick={handleSubmit}>Oke</button>
          <button onClick={() => changeIsEdit(data.id)}>Batal</button>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
