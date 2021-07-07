import firestore from "../firestore";



export const getProducts = async () => {

        // specifying the collection
    let col = firestore.collection("products");

        // querying the collection
    const queryData = await col.get();

        // taking docs out of collection
    const documents = queryData.docs;

        // extracting data from documents
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));

}

export const getProduct = async (id) => {
    let col = firestore.collection("products");
    const ref = col.doc(id);
    const prod = await ref.get();

    // if (!prod.exists) {
    //     return;
    // }

    return  { id: prod.id, ...prod.data() };
}