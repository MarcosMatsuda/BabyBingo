import React, {useState, useEffect, useCallback} from 'react';
import _ from 'lodash';
import * as Styles from './Board.styles'

const Board = ({squareNames}) => {
  const [isFullBoard, setIsFullBoard] = useState(false);
  const [hasLineBingo, setHasLineBingo] = useState(false);
  const [selectedSquares, setSelectedSquares] = useState([]);

  const toggleSelection = useCallback(index => {
    if (selectedSquares.includes(index)) {
      setSelectedSquares(selectedSquares.filter(i => i !== index));
    } else {
      setSelectedSquares([...selectedSquares, index]);
    }
  }, [selectedSquares])
  

  const hasBingoInRow = rowIndex => {
    const row = squareNames[rowIndex]
    return row.every(square => selectedSquares.includes(square))
  }

  const hasBingoInColumn = (columnIndex, selectedSquares, squareNames) => {
    return squareNames.every(row => selectedSquares.includes(row[columnIndex]))
  }
  
  const hasBingoInTopLeftBottomRightDiagonal = () => {
    return squareNames.every((row, i) => selectedSquares.includes(row[i]))
  }
  
  const hasBingoInTopRightBottomLeftDiagonal = (selectedSquares, board) => {
    for (let i = 0; i < board.length; i++) {
      if (!selectedSquares.includes(board[i][board.length - 1 - i])) {
        return false
      }
    }
    return true
  };
  
  const hasBingoLine = () => {
    // Check rows
    for (let i = 0; i < squareNames.length; i++) {
      if (hasBingoInRow(i)) {
        return true
      }
    }
    
    // Check columns
    for (let i = 0; i < squareNames[0].length; i++) {
      if (hasBingoInColumn(i, selectedSquares, squareNames)) {
        return true
      }
    }
    
    // Check diagonals
    if (hasBingoInTopLeftBottomRightDiagonal()) {
      return true
    }
    if (hasBingoInTopRightBottomLeftDiagonal(selectedSquares, squareNames)) {
      return true
    }
  }

  useEffect(() => {
    if(hasBingoLine() && hasLineBingo === false){
      console.log('bingo linha')
      setHasLineBingo(true)
    }

    // Check if board is full
    if (selectedSquares.length === squareNames.length * squareNames[0].length) {
      console.log('BINGO INTEIRO')
      setIsFullBoard(true)
    }
  }, [selectedSquares])

  return (
    <Styles.Container>
      {squareNames.map((row, i) => (
        <Styles.Row key={i}>
          {row.map((name, j) => (
            <Styles.Square 
              key={j} 
              selected={selectedSquares.includes(name)}
              onPress={() => toggleSelection(name)}
            >
              <Styles.SquareText>{name}</Styles.SquareText>
            </Styles.Square>
          ))}
        </Styles.Row>
      ))}
      {isFullBoard && <Styles.Result>BINGO</Styles.Result>}
    </Styles.Container>
  );
};

export default Board;
