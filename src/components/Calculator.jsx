import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState();
  const [operator, setOperator] = useState();

  // OPERAÇÕES MATEMÁTICAS
  const inputNum = (e) => {
    let input = e.target.value;

    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const reset = () => {
    setNum(0);
  };

  const percent = () => {
    setNum(num / 100);
  };

  const invert = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const operacoes = (e) => {
    let operacao = e.target.value;

    setOperator(operacao);
    setOldNum(num);
    setNum(0);
  };

  const calculate = (e) => {
    if (operator === '/') {
      setNum((oldNum / num).toLocaleString('pt-BR'));
    } else if (operator === 'x') {
      setNum(oldNum * num);
    } else if (operator === '+') {
      setNum(+oldNum + +num);
    } else if (operator === '-') {
      setNum(oldNum - num);
    }
  };

  // FIM OPERAÇÕES
  return (
    <Box m={5}>
      <Container maxWidth="xs">
        <div className="wrapper">
          <div className="result">
            <p>{num}</p>
          </div>

          <button className="reset" onClick={reset}>
            AC
          </button>
          <button className="reset" onClick={invert}>
            ±
          </button>
          <button className="reset" onClick={percent}>
            %
          </button>
          <button className="operators" onClick={operacoes} value="/">
            ÷
          </button>
          <button className="numbers" onClick={inputNum} value={7}>
            7
          </button>
          <button className="numbers" onClick={inputNum} value={8}>
            8
          </button>
          <button className="numbers" onClick={inputNum} value={9}>
            9
          </button>
          <button className="operators" onClick={operacoes} value="x">
            x
          </button>
          <button className="numbers" onClick={inputNum} value={4}>
            4
          </button>
          <button className="numbers" onClick={inputNum} value={5}>
            5
          </button>
          <button className="numbers" onClick={inputNum} value={6}>
            6
          </button>
          <button className="operators" onClick={operacoes} value="+">
            +
          </button>
          <button className="numbers" onClick={inputNum} value={1}>
            1
          </button>
          <button className="numbers" onClick={inputNum} value={2}>
            2
          </button>
          <button className="numbers" onClick={inputNum} value={3}>
            3
          </button>
          <button className="operators" onClick={operacoes} value="-">
            -
          </button>
          <button className="zero" onClick={inputNum} value={0}>
            0
          </button>
          <button className="numbers" onClick={inputNum} value={'.'}>
            ,
          </button>
          <button className="operators" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </Box>
  );
};

export default Calculator;
