// import { deleteCartItem } from "../../services/cart";

 const DeleteItem = ({ item, onDelete }) => {

    const handleDelete = (event) => {
        // deleteCartItem(item.id);
        onDelete(item.id);
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteItem;