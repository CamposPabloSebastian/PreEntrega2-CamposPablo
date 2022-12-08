import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ listaObjetos }) => {
    return (
        <>
            {listaObjetos.map(obj => (
                <div key={obj.id}>
                    <Link to={`/ListMotos/${obj.id}`}><Item objeto={obj} /></Link>
                </div>
            ))}
        </>
    );
}

export default ItemList;