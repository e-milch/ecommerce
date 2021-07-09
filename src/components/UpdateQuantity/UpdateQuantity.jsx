import { useState } from "react";

const UpdateQuantity = ({ onChange, value }) => {

    return (
        <>
            <button onClick={() => onChange(value - 1)}>-</button>
            {value}
            <button onClick={() => onChange(value + 1)}>+</button>
        </>
    )
}

export default UpdateQuantity