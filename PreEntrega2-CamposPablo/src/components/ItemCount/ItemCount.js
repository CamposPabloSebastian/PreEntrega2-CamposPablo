import React, { useState } from 'react';

const ItemCount = ({ stockInicial }) => {

    const [stock, setStock] = useState(stockInicial);

    const buttonResta = () => {
        stock > 0 ? setStock(stock - 1) : setStock(0);
    }

    const buttonSuma = () => {
        stock === stockInicial ? setStock(stockInicial) : setStock(stock + 1);
    }

    return (
        <div>
            <button onClick={buttonResta}>-</button>
            <span>{stock}</span>
            <button onClick={buttonSuma}>+</button>
        </div>
    );
}

export default ItemCount;