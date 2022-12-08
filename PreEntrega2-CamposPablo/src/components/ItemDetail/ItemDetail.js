import React from 'react'

const ItemDetail = ({ producto }) => {
    console.log(producto)
    return (

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
                {/* <button type="button" id={"detalle" + producto.id} className="btn btn-dark btn-detalle" data-bs-toggle="modal" data-bs-target={"#staticBackdropDetalle" + producto.id}>Detalle
                </button> */}
            </div>
        </div>
    )
}

export default ItemDetail