import React from 'react';
import { bindActionCreators } from 'redux';
import { Game } from 'routes/Game/components/Game';
import { shallow } from 'enzyme';
import { initialState } from 'routes/Game/modules/game';

describe('(Component) Game', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      game: initialState,
      ...bindActionCreators({
        checkResult: (_spies.checkResult = sinon.spy()),
        setNumber: (_spies.setNumber = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };
    _wrapper = shallow(<Game {..._props} />);
  });

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true);
  });

  it('Should render with an <h2> that includes Sample Game text.', () => {
    expect(_wrapper.find('button').text()).to.match(/Check/);
  });

  describe('An increment button...', () => {
    let _button;

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Check');
    });

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true;
    });

    it('Should dispatch a `checkResult` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called;

      _button.simulate('click');

      _spies.dispatch.should.have.been.called;
      _spies.checkResult.should.have.been.called;
    });
  });
});
