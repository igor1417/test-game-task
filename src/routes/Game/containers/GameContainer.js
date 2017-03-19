import { connect } from 'react-redux';
import { config } from '../../../config/';
import { checkResult, setNumber } from '../modules/game';
import Game from '../components/Game';

const mapDispatchToProps = {
  setNumber: (event) => {
    return setNumber(Number(event.target.value));
  },
  checkResult: () => {
    return checkResult(config.winNumber);
  }
};

const mapStateToProps = (store) => ({
  win: store.game.win,
  tryNumber: store.game.tryNumber
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
