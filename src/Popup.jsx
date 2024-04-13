import "./App.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, closePopup } from "./store";

const Popup = () => {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({ name: "", price: 0, category: "", desc: "" });

    const handleChange = e => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBook({ book: newBook }));
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
                    <input onChange={handleChange} required type="text" name="name" value={newBook.name} />
                </label>
                <label>
                    Price
                    <input
                        onChange={handleChange}
                        required
                        type="number"
                        name="price"
                        value={newBook.price}
                    />
                </label>
                <label>
                    Category
                    <input
                        onChange={handleChange}
                        required
                        type="text"
                        name="category"
                        value={newBook.category}
                    />
                </label>
                <label>
                    Description
                    <input onChange={handleChange} required type="text" name="desc" value={newBook.desc} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Popup;
