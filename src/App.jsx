import "./App.scss";
import { useState } from "react";
import Book from "./Book";
import Popup from "./Popup";
import Edit from "./Edit";

function App() {
    const [book, setBook] = useState({ name: "", price: 0, category: "", desc: "" });
    const [bookList, setBookList] = useState([
        { name: "Harry Potter", price: 20, category: "Fantasy", desc: "Boy becomes Wizard" },
        { name: "Jurassic Park", price: 18, category: "Sci-Fi", desc: "Dino Island" },
    ]);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState();
    const [edit, setEdit] = useState(false);
    console.log(bookList);
    return (
        <>
            {open && <Popup {...{ book, setBook, setOpen, bookList }} />}
            {edit && <Edit {...{ book, index, setBookList, bookList, setEdit, setBook }} />}
            <h1>Book List</h1>
            <button onClick={() => setOpen(true)}>ADD</button>
            <p>Click a Book to Edit</p>
            <div className="book-grid">
                {bookList.map((x, i) => (
                    <Book {...{ x, i, setBookList, bookList, setBook, setIndex, setEdit }} key={i} />
                ))}
            </div>
        </>
    );
}

export default App;
