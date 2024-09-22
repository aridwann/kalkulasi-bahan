import { useState } from "react";

function EditItem({ data, changeIsEdit, calc }) {
  const [value, setValue] = useState(data.value);

  const handleChange = (e) => {
    setValue(e.target.value);

    calc(data.id, value);
  };
  return (
    <div>
      <label>{data.name}</label>
      <div>
        <input type="number" value={value} onChange={handleChange} />
        <div>
          <button onClick={() => changeIsEdit(data.id)}>Selesai</button>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
