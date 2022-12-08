import React, { useState } from 'react';

const ItemCount = ({ stockInicial }) => {

    const [stock, setStock] = useState(stockInicial);

    const buttonResta = () => {
        stock > 0 ? setStock(stock - 1) : setStock(0);
    }

    const buttonSuma = () => {
        stock < 10 ? setStock(stock + 1) : setStock(10);
    }

    return (
        <div>
            <button className="btn btn-secondary mx-3" onClick={buttonResta}>-</button>
            <span>{stock}</span>
            <button className="btn btn-secondary ms-3" onClick={buttonSuma}>+</button>
        </div>
    );
}

export default ItemCount;