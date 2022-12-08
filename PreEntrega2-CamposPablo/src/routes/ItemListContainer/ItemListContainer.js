import React, { useEffect, useState } from "react";
// import ItemCount from "../../components/ItemCount/ItemCount"
import ItemCount from "../../components/ItemCount/ItemCount";
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
            }, 2000)

        })
        promesa.then(res => setData(res));

    }, []);

    return (
        <div className="container w-75">
            <div className="row d-flex justify-content-around">
                {saludo}
                {/* a MODO DE PRUEBA COLOCO EL ITEM COUNT, LUEGO QUITARLO */}
                <ItemCount stockInicial={5} />
                <ItemList listaObjetos={data} />
            </div>
        </div>
    )
}

export default ItemListContainer;