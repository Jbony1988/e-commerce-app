import React from 'react';
import {Link} from "react-router-dom";
import products from "../products";
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"

const ProductScreen = () => {
    const {id:productId} = useParams();
    const product = products.find((p) => p._id === productId);

    return (
        <>
            Product Screen
        </>
    )
}

export default ProductScreen
