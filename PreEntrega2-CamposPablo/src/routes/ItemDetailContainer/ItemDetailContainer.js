import React, { useEffect, useState } from 'react'
import listProduct from '../../BD';
import ItemDetail from './../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
// import ItemDetail from './../../components/ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [dat, setDat] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listProduct.find(obj => obj.id === parseInt(id)));
            }, 2000)

        })
        promesa.then(res => setDat(res));

    }, [id]);
    console.log(dat)

    return <div>
        <ItemDetail producto={dat} />
    </div>;
}

export default ItemDetailContainer