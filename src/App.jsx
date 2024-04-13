import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, editBook, deleteBook, selectBook } from "./store";
import Book from "./Book";
import Popup from "./Popup";
import Edit from "./Edit";

const App = () => {
    const dispatch = useDispatch();
    const bookList = useSelector(state => state.book.bookList);
    const popupOpen = useSelector(state => state.book.popupOpen);
    const editMode = useSelector(state => state.book.editMode);

    const handleEdit = book => {
        dispatch(selectBook({ book }));
        dispatch(editBook({ book }));
    };

    const handleDelete = id => {
        dispatch(deleteBook({ id }));
    };

    return (
        <>
            {popupOpen && <Popup />}
            {editMode && <Edit />}
            <h1>Book List</h1>
            <button onClick={() => dispatch(openPopup())}>ADD</button>
            <p>Click a Book to Edit</p>
            <div className="book-grid">
                {bookList.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                        editBook={() => handleEdit(book)}
                        deleteBook={() => handleDelete(book.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default App;
