import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import EditItem from "./components/EditItem";

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Baku",
      proporsi: 65 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
    {
      id: 1,
      name: "Air",
      proporsi: 22 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
    {
      id: 2,
      name: "CMC/KRGN",
      proporsi: 4 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
    {
      id: 3,
      name: "Glycerol",
      proporsi: 5 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
    {
      id: 4,
      name: "Gula",
      proporsi: 1 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
    {
      id: 5,
      name: "Garam",
      proporsi: 1 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
    {
      id: 6,
      name: "Minyak",
      proporsi: 2 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
    },
  ]);

  const changeIsEdit = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
    setData((prev) =>
      prev.map((item) =>
        item.id !== id ? { ...item, showEditBtn: !item.showEditBtn } : item
      )
    );
  };

  const calc = (index, jumlah) => {
    setData(
      data.map((item) =>
        item.id == index
          ? {
              ...item,
              isEditing: !item.isEditing,
            }
          : item
      )
    );
    setData((prev) =>
      prev.map((item) => ({
        ...item,
        value: ((jumlah / data[index].proporsi) * item.proporsi).toFixed(3),
      }))
    );
    setData((prev) =>
      prev.map((item) =>
        item.id !== index ? { ...item, showEditBtn: !item.showEditBtn } : item
      )
    );
  };

  return (
    <div id="container">
      <h1>Kalkulasi Bahan</h1>
      <section>
        {data.map((item) =>
          item.isEditing ? (
            <EditItem
              key={item.id}
              data={item}
              // editValue={editValue}
              calc={calc}
              changeIsEdit={changeIsEdit}
            />
          ) : (
            <Item key={item.id} data={item} changeIsEdit={changeIsEdit} />
          )
        )}
      </section>
    </div>
  );
}

export default App;
