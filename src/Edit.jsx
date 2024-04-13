import "./App.scss";

const Edit = ({ book, index, setBookList, bookList, setEdit, setBook }) => {
    const editBook = e => {
        e.preventDefault();
        let newList = [...bookList];
        newList[index] = { ...book };
        setBookList(newList);
        setBook({ name: "", price: 0, category: "", desc: "" });
        setEdit(false);
    };
    const handleChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };
    return (
        <div className="Popup">
            <form onSubmit={editBook}>
                <span className="x" onClick={() => setEdit(false)}>
                    X
                </span>
                <label>
                    Name
                    <input onChange={handleChange} required type="text" name="name" value={book.name} />
                </label>
                <label>
                    Price
                    <input onChange={handleChange} required type="number" name="price" value={book.price} />
                </label>
                <label>
                    Category
                    <input
                        onChange={handleChange}
                        required
                        type="text"
                        name="category"
                        value={book.category}
                    />
                </label>
                <label>
                    Description
                    <input onChange={handleChange} required type="text" name="desc" value={book.desc} />
                </label>
                <button type="submit">Edit</button>
            </form>
        </div>
    );
};

export default Edit;
