import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const BookForm = ({ book, onSave, onBack }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
        }
    }, [book]);

    const handleSubmit = (e) = {
        e.preventDefault();
        onSave({ id: book ? book.id : null, title, author });
    };

    return (
        <div>
            <h1></h1>
        </div>
    )
}