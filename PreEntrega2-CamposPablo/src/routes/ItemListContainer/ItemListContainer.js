import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import listProduct from "../../BD";

const ItemListContainer = ({ saludo }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch('./data/BBDD.json')
        //     .then(res => res.json())
        //     .then(objetos => setData(objetos));
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listProduct);
            }, 1000)

        })
        promesa.then(res => setData(res));

    }, []);

    return (
        <div className="container w-75">
            {saludo}
            <div className="row d-flex justify-content-around">
                <ItemList listaObjetos={data} />
            </div>
        </div>
    )
}

export default ItemListContainer;