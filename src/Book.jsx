const Book = ({ x, i, setBookList, bookList, setBook, setIndex, setEdit }) => {
    return (
        <div className="Book">
            <div
                onClick={() => {
                    setBook({ ...x });
                    setIndex(i);
                    setEdit(true);
                }}
                className="info"
            >
                <h2>Title: {x.name}</h2>
                <h2>Price: ${x.price}</h2>
                <h2>Cat: {x.category}</h2>
                <h2>Desc: {x.desc}</h2>
            </div>
            <button
                onClick={() => {
                    let newList = [...bookList];
                    newList.splice(i, 1);
                    setBookList(newList);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Book;
