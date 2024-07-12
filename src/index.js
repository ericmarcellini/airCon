import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
);

export default App;
