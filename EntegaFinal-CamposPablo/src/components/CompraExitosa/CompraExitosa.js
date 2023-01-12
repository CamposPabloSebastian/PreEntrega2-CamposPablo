import React from 'react'

const CompraExitosa = ({ id }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Se pedido se ah realizado con exito</h5>
                    <p className="card-text">Su numero de pedido es:</p>
                    <p>{id}</p>
                </div>
            </div>
        </div>
    )
}

export default CompraExitosa;

