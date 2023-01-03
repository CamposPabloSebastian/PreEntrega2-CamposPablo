import React, { useContext, useState } from 'react';
import ItemCount from './../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartContext/CartContext';

const ItemDetail = ({ producto }) => {

    const [countItemCart, setCountItemCart] = useState(0);
    const { addItemCart } = useContext(CartContext);

    const onAdd = (cant) => {
        // console.log("cant en item detail es: " + typeof (cant), cant)
        setCountItemCart(cant);
        addItemCart(producto, cant);
    }

    return (
        <>
            <div className='text-center'>
                <Link to='/listMotos'><button className='btn btn-warning'>Volver</button></Link>
                <Link to='/cart'><button className='btn btn-warning'>Finalizar Compra</button></Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-4">
                <div className="card">
                    <img src={producto.img} alt="" className="img-fluid" />
                    <div className="card-header text-center px-0 w-100">
                        <h5 className="card-title m-0">{producto.marca} - {producto.modelo}</h5>
                    </div>
                    <div className="card-body py-0">
                        <ul className="list-group list-group-flush list-group-horizontal row">
                            <li className="list-group-item col-6">{producto.tipo}</li>
                            <li className="list-group-item col-6 text-end">{producto.anio}</li>
                        </ul>
                        <ul className="list-group list-group-flush list-group-horizontal row">
                            <li className="list-group-item col-6">{producto.kilometros} km</li>
                            <li className="list-group-item col-6 text-end">{producto.carnet}</li>
                        </ul>
                    </div>
                    <div className="card-footer text-end">{producto.precio}</div>
                    <div className="text-center"><ItemCount stockInicial={producto.stock} onAdd={onAdd} /></div>
                    <p>Unidades disponibles: {producto.stock - countItemCart}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;