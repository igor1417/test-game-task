import {
    CHECK_RESULT,
    SET_NUMBER,
    checkResult,
    setNumber,
    initialState,
    default as gameReducer
} from 'routes/Game/modules/game';

const testNumber = 555;

describe('(Redux Module) Game', () => {
  it('Should export a constant COUNTER_INCREMENT.', () => {
    expect(CHECK_RESULT).to.equal('CHECK_RESULT');
  });

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(gameReducer).to.be.a('function');
    });

    it('Should initialize with a state of 0 (Number).', () => {
      expect(gameReducer(undefined, {})).to.equal(initialState);
    });

    it('Should return the previous state if an action was not matched.', () => {
      let state = gameReducer(undefined, {});
      expect(state).to.equal(initialState);

      state = gameReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal(initialState);

      state = gameReducer(state, setNumber(testNumber));
      expect(state.number).to.equal(testNumber);
    });
  });

  describe('(Action Creator) setNumber', () => {
    it('Should be exported as a function.', () => {
      expect(setNumber).to.be.a('function');
    });

    it('Should return an action with type "SET_NUMBER".', () => {
      expect(setNumber()).to.have.property('type', SET_NUMBER);
    });

    it('Should assign the first argument to the "payload" property.', () => {
      expect(setNumber(testNumber)).to.have.property('number', testNumber);
    });
  });

  describe('(Action Creator) checkResult', () => {
    it('Should be exported as a function.', () => {
      expect(checkResult).to.be.a('function');
    });

    it('Should return an action with type "CHECK_RESULT".', () => {
      expect(checkResult()).to.have.property('type', CHECK_RESULT);
    });

    it('Should assign the first argument to the "payload" property.', () => {
      expect(checkResult(testNumber)).to.have.property('winNumber', testNumber);
    });
  });
});
