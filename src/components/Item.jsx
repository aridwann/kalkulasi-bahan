function Item({ data, changeIsEdit, changeIsLock }) {
  return (
    <div>
      <p>
        <button className="kunci" onClick={() => changeIsLock(data.id)}>
          {data.isLock ? "8" : "U"}
        </button>
        {data.proporsi} | <b>{data.name}</b>
      </p>
      <div>
        <p>{data.value} gram</p>
        <button
          className={!data.showEditBtn ? "none" : undefined}
          onClick={() => changeIsEdit(data.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Item;
