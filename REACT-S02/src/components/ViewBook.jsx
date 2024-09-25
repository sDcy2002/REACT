import PropTypes from 'prop-types';

const ViewBook = ({ book, onEdit, onDelete, onBack }) => {
    const handleDelete = () => {
        onDelete(book.id);
    };

    return (
        <div classname="view-book-container">
            <h1 classname="center">View Book</h1>
            <table classname="book-table">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                </tbody>
            </table>
            <div classname="button-container">
                <button classname="edit-button" onClick={() => onEdit(book.id)}>Edit</button>
                <button classname="delete-button" onClick={handleDelete}>Delete</button>
                <button classname="back-button" onClick={onBack}>Back to List</button>
            </div>
        </div>
    );
};

ViewBook.propTypes = {
    book: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default ViewBook;