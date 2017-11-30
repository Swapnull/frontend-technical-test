const React = require('React');
const expect = require('chai').expect;
const enzyme = require('enzyme');
const VehicleList = require('../../src/components/VehicleList').default;


const { shallow } = enzyme;

describe("<VehicleList />", function() {

  it('renders', function() {
    const wrapper = shallow(<VehicleList/>);
    expect(wrapper.find('.vehicle-list').exists()).to.equal(true);
    expect(wrapper.find('.vehicle-list')).to.have.length(1);
  });

});