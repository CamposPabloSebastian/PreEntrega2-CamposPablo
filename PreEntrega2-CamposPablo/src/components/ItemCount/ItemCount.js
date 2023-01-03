import React, { useState } from 'react';

const ItemCount = ({ stockInicial, onAdd }) => {

    const [stock, setStock] = useState(0);

    let buttonResta, buttonSuma;

    if (stockInicial) { //si el stock no es cero entramos
        buttonResta = () => {
            stock > 0 ? setStock(stock - 1) : setStock(0);
        }

        buttonSuma = () => {
            stock < stockInicial ? setStock(stock + 1) : setStock(stockInicial);
        }
    }

    const addItem = () => {
        onAdd(stock);
    }

    return (
        <div>
            <button className="btn btn-secondary mx-3" onClick={buttonResta}>-</button>
            <span>{stock}</span>
            <button className="btn btn-secondary ms-3" onClick={buttonSuma}>+</button>
            <button className='btn btn-primary w-100 m-auto my-2' onClick={addItem}>Añadir al carrito</button>
        </div>
    );
}

export default ItemCount;