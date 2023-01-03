import React, { useContext } from 'react'
import { CartContext } from '../../components/cartContext/CartContext';
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, clearCart, removeItem, subtractAmount, addAmount, totalCart } = useContext(CartContext);

    return (
        <>
            <div className='text-center'>
                <button onClick={clearCart} className="btn btn-danger m-2">Vaciar carrito</button>
                <Link to='/listMotos'><button className='btn btn-primary m-2'>Seguir comprando</button></Link>
                <Link to=''><button className='btn btn-primary m-2'>Finalizar Compra</button></Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="col">Item</th>
                        <th colSpan="col"></th>
                        <th colSpan="col">Producto</th>
                        <th colSpan="col">Precio unit</th>
                        <th colSpan="col">Cantidad</th>
                        <th colSpan="col">Total</th>
                        <th colSpan="col"></th>
                    </tr>
                </thead>
                {cart.map((item, index) => (
                    <tbody key={index} >
                        <tr>
                            <th colSpan="row">{index + 1}</th>
                            <td className='col-2'><img src={item.img} className="img-fluid rounded-start" alt="..." /></td>
                            <td>{item.marca} - {item.modelo}</td>
                            <td>{item.precio}€</td>
                            <td> <button onClick={() => subtractAmount(item.id)}>-</button> {item.amount} <button onClick={() => addAmount(item.id)}>+</button></td>
                            <td>{item.amount * item.precio}€</td>
                            <td><BsTrash onClick={() => removeItem(item.id)}></BsTrash></td>
                        </tr>
                    </tbody>
                ))}
                <tfoot>
                    <tr className='text-end'>
                        <th colSpan="6">TOTAL</th>
                        <th colSpan="2" className='text-center'>{totalCart()} €</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )

}

export default Cart;
