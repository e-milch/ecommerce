

const UpdateQuantity = ({ qty, onAdd, onRemove }) => {

    return (
        <>
            <button onClick={onRemove}>-</button>
            {qty}
            <button onClick={onAdd}>+</button>
        </>
    )
}

export default UpdateQuantity