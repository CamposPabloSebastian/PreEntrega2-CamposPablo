import React from 'react';
import { BsFillCartFill } from "react-icons/bs";

const CardWidget = ({ countCart }) => {
    // console.log("en carwidget es: " + typeof (countCart), countCart)

    return (
        <>
            <BsFillCartFill />
            <span className='ps-2'>{countCart}</span>
        </>
    )
}

export default CardWidget;