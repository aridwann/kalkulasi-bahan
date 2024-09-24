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
      isLock: false,
    },
    {
      id: 1,
      name: "Air",
      proporsi: 22 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
      isLock: false,
    },
    {
      id: 2,
      name: "CMC/KRGN",
      proporsi: 4 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
      isLock: false,
    },
    {
      id: 3,
      name: "Glycerol",
      proporsi: 5 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
      isLock: false,
    },
    {
      id: 4,
      name: "Gula",
      proporsi: 1 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
      isLock: false,
    },
    {
      id: 5,
      name: "Garam",
      proporsi: 1 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
      isLock: false,
    },
    {
      id: 6,
      name: "Minyak",
      proporsi: 2 / 100,
      value: 0,
      isEditing: false,
      showEditBtn: true,
      isLock: false,
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

  const changeIsLock = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isLock: !item.isLock } : item
      )
    );
  };

  const adjustValues = (id, newValue) => {
    setData(
      data.map((item) => ({
        ...item,
        value: formatAngka(
          ((newValue / data[id].proporsi) * item.proporsi).toFixed(3)
        ),
      }))
    );
  };

  function adjustProportions(id, newValue) {
    const adjustmentFactor = (1 - newValue) / (1 - data[id].proporsi);

    setData(
      data.map((item) =>
        item.id === id ? { ...item, proporsi: newValue } : item
      )
    );
    setData((prev) =>
      prev.map((item) =>
        item.id !== id && item.isLock !== true
          ? {
              ...item,
              proporsi: (item.proporsi *= adjustmentFactor).toFixed(3),
            }
          : item
      )
    );
  }

  function formatAngka(angka) {
    // Konversi ke string untuk manipulasi
    let angkaString = angka.toString();

    // Pisahkan bagian bilangan bulat dan desimal
    let bagianBulat, bagianDesimal;
    let titikDesimal = angkaString.indexOf(".");
    if (titikDesimal !== -1) {
      bagianBulat = angkaString.slice(0, titikDesimal);
      bagianDesimal = angkaString.slice(titikDesimal);
    } else {
      bagianBulat = angkaString;
      bagianDesimal = "";
    }

    // Hapus nol di belakang koma jika ada
    if (bagianDesimal === ".000") {
      bagianDesimal = "";
    } else {
      // Hapus nol di belakang koma jika ada lebih dari 1 digit di belakang koma
      bagianDesimal = bagianDesimal.replace(/\.0+$/, "");
    }

    // Tambahkan titik pemisah ribuan pada bagian bilangan bulat
    bagianBulat = bagianBulat.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Ganti titik desimal dengan koma
    bagianDesimal = bagianDesimal.replace(".", ",");

    // Gabungkan kembali bagian bilangan bulat dan desimal
    return bagianBulat + bagianDesimal;
  }

  return (
    <div id="container">
      <section>
        <h1>KALKULASI BAHAN</h1>
        {data.map((item) =>
          item.isEditing ? (
            <EditItem
              key={item.id}
              data={item}
              adjustValues={adjustValues}
              changeIsEdit={changeIsEdit}
              adjustProportions={adjustProportions}
            />
          ) : (
            <Item
              key={item.id}
              data={item}
              changeIsEdit={changeIsEdit}
              changeIsLock={changeIsLock}
            />
          )
        )}
        <p>
          Catatan: <span>U</span> = tidak dikunci, <span>8</span> = dikunci
        </p>
      </section>
    </div>
  );
}

export default App;
