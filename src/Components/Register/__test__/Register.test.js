import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Register';


describe('When ClassComponent component is given', () => {
  let wrapper;
let match = {
    params: {
        courseIdParam: 123,
        courseNameParam: "Test"
    }
}
  beforeEach(() => {
    wrapper = shallow(<Register match={match}/>);
  });

  
  it('should render the component', () => {
    expect(wrapper).toBeDefined();
  });
});
describe('When EventComponent  component is given', () => {
    let wrapper;
    let match = {
        params: {
            courseIdParam: 123,
            courseNameParam: "Test"
        }
    }
    beforeEach(() => {
        wrapper = shallow(<Register match={match}/>);
      });
    
    it('should render', () => {
      expect(wrapper).toHaveLength(1);
    });
  
    it('should render buttons', () => {
      expect(wrapper.find('#btn1')).toHaveLength(1);
      expect(wrapper.find('#btn2')).toHaveLength(1);
    });
  
    describe('When first button is cliked', () => {
      it('should have called register function', () => {
        const spy = jest.spyOn(comp.instance(), 'register');
        comp.instance().forceUpdate();
        comp.find('#btn1').simulate('click');
        expect(spy).toHaveBeenCalled();
      });
    });
});