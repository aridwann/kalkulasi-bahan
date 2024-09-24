function Item({ data, changeIsEdit }) {
  return (
    <div>
      <p>
        {data.proporsi} | <b>{data.name}</b>
      </p>
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
