import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookList: [
        { id: 1, name: "Harry Potter", price: 20, category: "Fantasy", desc: "Boy becomes Wizard" },
        { id: 2, name: "Jurassic Park", price: 18, category: "Sci-Fi", desc: "Dino Island" },
    ],
    selectedBook: { id: null, name: "", price: 0, category: "", desc: "" },
    popupOpen: false,
    editMode: false,
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        openPopup(state) {
            state.popupOpen = true;
        },
        closePopup(state) {
            state.popupOpen = false;
            state.editMode = false;
        },
        editBook(state, action) {
            state.selectedBook = { ...action.payload.book };
            state.editMode = true;
            state.popupOpen = true;
        },
        addBook(state, action) {
            const newId = state.bookList.length + 1;
            state.bookList.push({ id: newId, ...action.payload.book });
            state.popupOpen = false;
        },
        updateBook(state, action) {
            const index = state.bookList.findIndex(book => book.id === action.payload.book.id);
            state.bookList[index] = action.payload.book;
            state.editMode = false;
            state.popupOpen = false;
        },
        deleteBook(state, action) {
            state.bookList = state.bookList.filter(book => book.id !== action.payload.id);
        },
        selectBook(state, action) {
            state.selectedBook = { ...action.payload.book };
        },
        resetBook(state) {
            state.selectedBook = { id: null, name: "", price: 0, category: "", desc: "" };
        },
        setEditMode(state, action) {
            state.editMode = action.payload.editMode;
        },
    },
});

export const {
    openPopup,
    closePopup,
    editBook,
    addBook,
    updateBook,
    deleteBook,
    selectBook,
    resetBook,
    setEditMode,
} = bookSlice.actions;

export default configureStore({
    reducer: {
        book: bookSlice.reducer,
    },
});
