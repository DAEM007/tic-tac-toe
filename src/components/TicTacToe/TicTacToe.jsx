import React from 'react';
import { 
  Container,
  Title,
  Board,
  Reset,
  Row1,
  Row2,
  Row3,
  Boxes
} from './styles';

function TicTacToe() {
  return (
    <Container>
      <Title>Daem Tic Tac Toe</Title>
      <Board>
        <Row1>
          <Boxes></Boxes>
          <Boxes></Boxes>
          <Boxes></Boxes>
        </Row1>
        <Row2>
          <Boxes></Boxes>
          <Boxes></Boxes>
          <Boxes></Boxes>
        </Row2>
        <Row3>
          <Boxes></Boxes>
          <Boxes></Boxes>
          <Boxes></Boxes>
        </Row3>
      </Board>
      <Reset>Reset</Reset>
    </Container>
  )
}

export default TicTacToe;