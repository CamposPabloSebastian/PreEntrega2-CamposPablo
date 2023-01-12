import React, { useState } from 'react';
import './filters.css';

const Filters = ({ filtroHandler }) => {

    const [filter, setFilter] = useState('');
    const filterOnChangeHandler = (ev) => {
        // setFilter();
        filtroHandler(ev.target.value);
        console.log(ev.target.value)
    }

    return (
        // <select defaultValue={"default"} classNameName="form-select" onChange={filterOnChangeHandler}>
        //     {marcas.map((marca, indice) => (
        //         <option key={indice} value={marca.marca}>{marca.marca}</option>
        //     ))}
        // </select>
        <form defaultValue={filter || "nada"} className="row" id="form-filtro">
            <div className="col-12 col-md-4">
                <label htmlFor="" className="mb-1">Marca</label>
                <select className="form-select" id="selectFiltroMarca" onChange={filterOnChangeHandler}>
                    <option value={''}>...</option>
                    <option value={'YAMAHA'}>YAMAHA</option>
                    <option value={'HONDA'}>HONDA</option>
                </select>
            </div>
            <div className="col-12 col-md-8">
                <label htmlFor="" className="mb-1">Año</label>
                <section id="selectFiltroAnio" className="row">
                    <div className="col-6">
                        <select disabled className="form-select" id="anio-desde" aria-label="Default select example">
                        </select>
                    </div>
                    <div className="col-6">
                        <select disabled className="form-select" id="anio-hasta" aria-label="Default select example">
                        </select>
                    </div>
                </section>
            </div>
            <div className="col-12 col-md-6 mt-4">
                <p>
                    Desde:<span htmlFor="inputPrecioDesde" id="labelPrecioDesde">
                        0</span>€
                </p>
                <input type="range" className="form-range" id="inputPrecioDesde" min="0" max="30000"
                    step="1000" />
            </div>
            <div className="col-12 col-md-6 mt-4">
                <p>
                    Hasta:<span htmlFor="inputPrecioHasta" id="labelPrecioHasta">
                        50000</span>€
                </p>
                <input type="range" className="form-range" id="inputPrecioHasta" min="0" max="30000"
                    step="1000" />
            </div>
        </form>
    )
}

export default Filters;