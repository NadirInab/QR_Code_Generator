import React from 'react' ;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <>
            <Navbar id='Navbar'  className='container p-3' expand="lg" variant="light" bg="muted">
                <Container>
                        <h2 className='w-100 mx-auto' >QR Code Generator</h2>
                </Container>
            </Navbar>
        </>
    )
}

export default navbar