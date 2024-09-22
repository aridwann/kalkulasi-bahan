import { useState } from "react";

function EditItem({ data, changeIsEdit, calc }) {
  const [value, setValue] = useState(data.value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    calc(data.id, newValue);
  };
  return (
    <div>
      <label>{data.name}</label>
      <div>
        <input type="number" min="0" value={value} onChange={handleChange} />
        <div>
          <button onClick={() => changeIsEdit(data.id)}>Selesai</button>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
