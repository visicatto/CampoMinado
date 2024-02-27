// src/screens/GameScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

const GameScreen = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    const initialBoard = Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => ({
        isMine: Math.random() < 0.1, // 10% chance of being a mine
        isRevealed: false,
      }))
    );
    setBoard(initialBoard);
  };

  const renderCell = (row, col) => {
    const cell = board[row][col];
    if (!cell.isRevealed) {
      return (
        <TouchableOpacity
          key={`${row}-${col}`}
          style={styles.cell}
          onPress={() => revealCell(row, col)}
        />
      );
    } else {
      return (
        <View key={`${row}-${col}`} style={styles.cell}>
          {cell.isMine ? (
            <FontAwesomeIcon icon={faBomb} size={24} color="red" />
          ) : (
            <Text style={styles.text}>💰</Text>
          )}
        </View>
      );
    }
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </View>
    ));
  };

  const revealCell = (row, col) => {
    const newBoard = [...board];
    newBoard[row][col].isRevealed = true;
    setBoard(newBoard);
  };

  return <View style={styles.container}>{renderBoard()}</View>;
};

const { width } = Dimensions.get('window');
const cellSize = (width - 16) / 8; // 16 for margins and paddings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: cellSize,
    height: cellSize,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  text: {
    fontSize: 24,
    color: 'green',
  },
});

export default GameScreen;
