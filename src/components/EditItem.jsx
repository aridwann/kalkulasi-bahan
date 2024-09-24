import { useState } from "react";

function EditItem({ data, changeIsEdit, adjustValues, adjustProportions }) {
  const [value, setValue] = useState(data.value);
  const [proporsi, setProporsi] = useState(data.proporsi);

  const handleValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    adjustValues(data.id, newValue);
  };

  const handleProporsi = (e) => {
    const newProporsi = e.target.value;
    setProporsi(newProporsi);

    adjustProportions(data.id, newProporsi);
  };

  return (
    <div>
      <p>
        <input
          type="number"
          min={0}
          max={1}
          value={proporsi}
          onChange={handleProporsi}
        />
        | <b>{data.name}</b>
      </p>
      <div>
        <input type="number" min={0} value={value} onChange={handleValue} />
        <div>
          <button onClick={() => changeIsEdit(data.id)}>Selesai</button>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
