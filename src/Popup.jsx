import "./App.scss";

const Popup = ({ book, setBook, setOpen, bookList }) => {
    const addBook = e => {
        e.preventDefault();
        bookList.push(book);
        setBook({ name: "", price: 0, category: "", desc: "" });
        setOpen(false);
    };
    const handleChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };
    return (
        <div className="Popup">
            <form onSubmit={addBook}>
                <span className="x" onClick={() => setOpen(false)}>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Popup;
