import React from 'react';
import GameResult from './GameResult';

export const Game = (props) => (
  <div style={{ margin: '0 auto' }}>
    <input className='btn btn-default' type='number' name='number' onChange={props.setNumber} />
    {' '}
    <button className='btn btn-default' onClick={props.checkResult}>
            Check
        </button>
    <GameResult win={props.win} tryNumber={props.tryNumber} />
  </div>
);

Game.propTypes = {
  win: React.PropTypes.any,
  tryNumber: React.PropTypes.number.isRequired,
  checkResult: React.PropTypes.func.isRequired,
  setNumber: React.PropTypes.func.isRequired
};

export default Game;
