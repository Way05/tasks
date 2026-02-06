import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Hello World
                <h1>HTML & CSS</h1>
                <Container>
                    <Row>
                        <img src="../public/logo512.png" alt="react logo" />
                        <Col>
                            <div
                                style={{
                                    width: 300,
                                    height: 300,
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <ol>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                            </ol>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: 300,
                                    height: 300,
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </p>
        </div>
    );
}

export default App;
