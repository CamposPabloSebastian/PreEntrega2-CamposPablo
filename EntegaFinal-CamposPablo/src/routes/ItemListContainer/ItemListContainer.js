import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
// import listProduct from "../../BD";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = ({ saludo }) => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'soloMotos-Items');
        // const q = query(itemsCollection, where('marca', '==', filter))
        // filter ?
        //     getDocs(q).then(snapshot => {
        //         const data = snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             ...doc.data()
        //         }))
        //         setData(data);
        //     }) :

        console.log("conexion de itemListContainer")
        console.log(itemsCollection.id)
        getDocs(itemsCollection).then(snapshot => {
            console.log("dentro)")
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setData(data);
        });



    }, []);

    const filterOnChangeHandler = (ev) => {
        setFilter(ev.target.value);
    }

    return (
        <div className="container w-75">
            <select onChange={filterOnChangeHandler}>
                <option value={''}>...</option>
                <option value={'YAMAHA'}>YAMAHA</option>
                <option value={'HONDA'}>HONDA</option>
            </select>
            <div className="row d-flex justify-content-around">
                <ItemList listaObjetos={data} />
            </div>
        </div>
    )
}

export default ItemListContainer;