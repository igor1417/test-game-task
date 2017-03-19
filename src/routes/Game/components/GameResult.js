import React from 'react';
import { config } from '../../../config/';

export const GameResult = ({ win, tryNumber }) => {
  const good = 'YOU WIN!!!';
  const bad = 'Try ' + (tryNumber > 3 ? config.winNumber : 'again.');

  return (
    <h1>{win === null ? '' : win ? good : bad}</h1>
  );
};

GameResult.propTypes = {
  win: React.PropTypes.any,
  tryNumber: React.PropTypes.number.isRequired
};

export default GameResult;

