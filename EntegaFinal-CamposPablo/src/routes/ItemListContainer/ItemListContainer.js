import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
// import listProduct from "../../BD";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Filters from "../../components/Filters/Filters";

const ItemListContainer = ({ saludo }) => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    // let marcasMapArr = new Map(data.map(item => {
    //     return [item.marca, item]
    // }));

    // let marcasDisponibles = [...marcasMapArr.values()]

    const filtroHandler = ({ filtroSelect }) => {
        console.log(filtroSelect)
    };

    // let modelosMapArr = new Map(data.map(item => {
    //     return [item.modelo, item]
    // }));

    // let modelosDisponibles = [...modelosMapArr.values()]


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'soloMotos-Items');
        const q = query(itemsCollection, where('marca', '==', filter))
        filter ?
            getDocs(q).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            }) :

            getDocs(itemsCollection).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            });
    }, [filter]);


    return (
        <>
            <Filters filtroHandler={filtroHandler} />
            <div className="container w-75">
                {/* <select onChange={filterOnChangeHandler}>
                <option value={''}>...</option>
                <option value={'YAMAHA'}>YAMAHA</option>
                <option value={'HONDA'}>HONDA</option>
            </select>
            <select defaultValue={"defaultMarca"} className="form-select" onChange={filterOnChangeHandler}>
                {marcasDisponibles.map((marc, indice) => (
                    <option key={indice} value={marc.marca}>{marc.marca}</option>
                ))}
            </select> */}

                <div className="row d-flex justify-content-around">
                    <ItemList listaObjetos={data} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;