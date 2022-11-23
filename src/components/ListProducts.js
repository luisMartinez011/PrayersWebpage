import React, { useState, useEffect, useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Context } from '../UseContext/Context';

export const ListProducts = () => {

  let { setFavorites, setTrolley, setdataProducts, dataProducts, setData } = useContext(Context);

  const [cargando, setCargando] = useState(true);
  // const[categorias, setCategorias] = useState([]);

  //Get Products
  const getProducts = async () => {
    const request = await fetch('https://whispering-hollows-99018.herokuapp.com/productos');
    const data = await request.json();

    setData(data)
    setdataProducts(data);
    setCargando(false);
  }

  useEffect(() => {
    getProducts();
  }, []);


  //Catch data added to Favorites
  const addFavorites = (id, imagen, nombre, precio) => {
    let product_to_favs = {
      id,
      imagen,
      nombre,
      precio
    };
    setFavorites(product_to_favs);
    console.log(id, imagen, nombre, precio)
    console.log(dataProducts[0].id)
    console.log(dataProducts[0]._id)
  }

  //Catch data added to Trolley
  const addTrolley = (id, imagen, nombre, precio) => {
    let product_to_trolley = {
      id,
      imagen,
      nombre,
      precio
    };
    setTrolley(product_to_trolley);
  }

  if (cargando === true) {

    //If Ajax request has not loaded
    return (
      <h1 className='cargando d-block mt-5 mb-5 text-center bg-dark text-white w-25 rounded-1 border border-2 border-dark'>Cargando Productos...</h1>
    );
  } else {

    //If Ajax request has loaded
    return (
      <div className='p-4'>
        <h1 className='d-block mt-4 mb-5 text-center bg-success text-white w-25 rounded-1 border border-2 border-dark'>Productos</h1>

        <Row xs={1} md={4} className="g-4">
          {dataProducts.map(product => (
            <Col key={product._id.$oid}>
              <Card className='product-card shadow'>
                <Card.Img className='image w-50 p-4' variant="top" src={product.imagen} />
                <Card.Body>
                  <Card.Title className='text-bold text-center fw-bold'>{product.nombre}</Card.Title>
                  <Card.Text className='text-center'>
                    El precio es: {product.precio} ₽
                  </Card.Text>
                </Card.Body>
                <Button variant="light" onClick={() => addFavorites(product._id.$oid, product.imagen, product.nombre, product.precio)}>Añadir A Favoritos</Button>
                <Button variant="success" onClick={() => addTrolley(product._id.$oid, product.imagen, product.nombre, product.precio)}>Añadir A Carrito</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
