function Item({ data, changeIsEdit }) {
  return (
    <div>
      <label>{data.name}</label>
      <div>
        <p>{data.value} gram</p>
        <button
          className={!data.showEditBtn && "none"}
          onClick={() => changeIsEdit(data.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Item;
