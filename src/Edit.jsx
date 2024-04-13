import "./App.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook, closePopup, resetBook } from "./store";

const Edit = () => {
    const dispatch = useDispatch();
    const selectedBook = useSelector(state => state.book.selectedBook);

    const [editedBook, setEditedBook] = useState(selectedBook);

    const handleChange = e => {
        setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateBook({ book: editedBook }));
        dispatch(resetBook());
        dispatch(closePopup());
    };

    return (
        <div className="Popup">
            <form onSubmit={handleSubmit}>
                <span className="x" onClick={() => dispatch(closePopup())}>
                    X
                </span>
                <label>
                    Name
                    <input onChange={handleChange} required type="text" name="name" value={editedBook.name} />
                </label>
                <label>
                    Price
                    <input
                        onChange={handleChange}
                        required
                        type="number"
                        name="price"
                        value={editedBook.price}
                    />
                </label>
                <label>
                    Category
                    <input
                        onChange={handleChange}
                        required
                        type="text"
                        name="category"
                        value={editedBook.category}
                    />
                </label>
                <label>
                    Description
                    <input onChange={handleChange} required type="text" name="desc" value={editedBook.desc} />
                </label>
                <button type="submit">Edit</button>
            </form>
        </div>
    );
};

export default Edit;
