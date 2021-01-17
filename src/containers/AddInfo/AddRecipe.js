import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddRecipe.css';


export default function AddRecipe() {
    return (
    <div id= "wrap">
        <div id="recipe">
            <h1> Recipe Name </h1>
            <div>
                <button className="image">image</button>
            </div>
            <h2>Type</h2>
            <h2>Category</h2>
            <h2>Rating</h2>
        </div>
        <div id="menu">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="lg" type="name"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Type</Form.Label>
                    <Form.Control size="lg" type="name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
            </Form>
            <div id="submit">
                <Button variant="secondary"> Submit </Button>
            </div>
        </div>
    </div>
    );
}
