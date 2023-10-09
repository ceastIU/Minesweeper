import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Grid() {
    const rows = 10;
    const cols = 10;
  
    const generateGrid = () => {
      const grid = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(
            <Col key={j}>
              <Button variant="primary">Button</Button>
            </Col>
          );
        }
        grid.push(
          <Row key={i} className="mt-2">
            {row}
          </Row>
        );
      }
      return grid;
    };
  
    return (
      <Container>
        <h1>10x10 Grid of Buttons</h1>
        {generateGrid()}
      </Container>
    );
  }
  
  export default Grid;