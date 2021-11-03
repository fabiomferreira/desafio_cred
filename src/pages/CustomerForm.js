import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CustomerForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const { elements } = event.target;
        for(let index = 0; index < elements.length; index++) {
            console.log(elements.item(index));
        }
        
    }
    return (
        <Form onSubmit={handleSubmit} className="m-3">
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="text" placeholder="Digite seu Nome" maxLength="255" />
            </Form.Group>
            <Button type="submit">Salvar</Button>
        </Form>
    )
}

export default CustomerForm;