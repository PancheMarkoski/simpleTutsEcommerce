import { firestore } from './../../firebase/utils'

export const handleAddProduct = product => {
    return new Promise((resolve,rejact) => {
        firestore
        .collection("product")
        .doc()
        .set(product)
        .then(() =>{
            resolve()
        })
        .catch((err) => {
            rejact(err)
        })
    })
}

export const handleEditProduct = (editProduct, editProductId) => {
    return new Promise ((resolve, rejact) => {
        firestore
        .collection("product")
        .doc(editProductId)
        .set(editProduct)
        .then(() => {
            resolve()
        })
        .catch((err) => {
            rejact(err)
        })
    })
}

export const handleFatchProducts = () => {
    return new Promise((resolve, rejact) => {
        firestore.collection("product").orderBy("createdDate").get().then((querySnapshot) => {
            const productArray = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                productArray.push({
                    ...doc.data(),
                    docID: doc.id
                })
            });
            resolve(productArray)
        })
        .catch(err => rejact(err))
    })
}

export const handleFatchProduct = ({payload}) => {
    return new Promise((resolve, rejact) => {
        let docRef = firestore.collection("product").doc(payload);
        docRef.get().then((doc) => {
            resolve({
                ...doc.data(),
                docID: doc.id
            })
        })
        .catch((err) => rejact(err))
    })
}


export const handleDeleteProduct = (productID) => {
    return new Promise((resolve, reajct) => {
        firestore.collection("product")
        .doc(productID)
        .delete()
        .then(() => {
            resolve()
        })
        .catch(err => reajct(err))
    })
}