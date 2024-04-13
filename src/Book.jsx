import "./App.scss";

const Book = ({ book, editBook, deleteBook }) => {
    return (
        <div className="Book">
            <div onClick={editBook} className="info">
                <h2>Title: {book.name}</h2>
                <h2>Price: ${book.price}</h2>
                <h2>Cat: {book.category}</h2>
                <h2>Desc: {book.desc}</h2>
            </div>
            <button onClick={deleteBook}>Delete</button>
        </div>
    );
};

export default Book;
