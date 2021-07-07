import firestore from "../firestore";

    // Create a new cart item
export const createCartItem = async (record) => {
    const col = firestore.collection("cart-objects");
    await col.add(record);
};

    // get all cart items
export const getCart = async () => {
    let col = firestore.collection("cart-objects");

    const queryData = await col.get();

    const documents = queryData.docs;

    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const deleteCartItem = async (id) => {
    const item = firestore.collection("cart-objects").doc(id);
    await item.delete();
}

export const getCartCount = async () => {
    const col = firestore.collection("cart-objects");

    const querySnap = await col.get();

    const cartSize = querySnap.size

    return cartSize;
}

// Update qty

export const updateQty = async (id, item) => {
    const ref = firestore.collection("cart-objects").doc(id);
    await ref.update(item);

}