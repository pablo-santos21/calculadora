import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

const Calculator = () => {
  return (
    <Box m={5}>
      <Container maxWidth="xs">
        <div className="wrapper">
          <div className="result">
            <p>0</p>
          </div>

          <button className="top">AC</button>
          <button className="top">±</button>
          <button className="top">%</button>
          <button className="right">÷</button>
          <button className="middle">9</button>
          <button className="middle">8</button>
          <button className="middle">7</button>
          <button className="right">X</button>
          <button className="middle">6</button>
          <button className="middle">5</button>
          <button className="middle">4</button>
          <button className="right">+</button>
          <button className="middle">3</button>
          <button className="middle">2</button>
          <button className="middle">1</button>
          <button className="right">-</button>
          <button className="zero">0</button>
          <button className="middle">,</button>
          <button className="right">=</button>
        </div>
      </Container>
    </Box>
  );
};

export default Calculator;
