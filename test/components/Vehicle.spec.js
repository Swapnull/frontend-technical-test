const React = require('React');
const expect = require('chai').expect;
const enzyme = require('enzyme');
const Vehicle = require('../../src/components/Vehicle').default;

const { shallow } = enzyme;


describe("<Vehicle />", function() {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<Vehicle id="xj" media={[{url: '/images/xj_k16.jpg'}]}/>);
    wrapper.setState({ data: { description: 'Wow, such speed.', price: "£14.99" } });
  });

  it('renders', function() {
    expect(wrapper.find('.vehicle-info').exists()).to.equal(true);
    expect(wrapper.find('.vehicle-info')).to.have.length(1);
  });

  it('displays the name', function() {
    const expected = '<span class="vehicle-info-details_name">XJ</span>';
    expect(wrapper.find('.vehicle-info-details_name').exists()).to.equal(true);
    expect(wrapper.find('.vehicle-info-details_name').html()).to.equal(expected);
  });

  it('displays the price', function() {
    const expected = '<div class="vehicle-info-details_price">From £14.99</div>';
    expect(wrapper.find('.vehicle-info-details_price').exists()).to.equal(true);
    expect(wrapper.find('.vehicle-info-details_price').html()).to.equal(expected);
  });

  it('displays the description', function() {
    const expected = '<div class="vehicle-info-details_description">Wow, such speed.</div>';
    expect(wrapper.find('.vehicle-info-details_description').exists()).to.equal(true);
    expect(wrapper.find('.vehicle-info-details_description').html()).to.equal(expected);
  });

  it('displays the image', function() {
    const expected = '<div class="vehicle-info_image" style="background-image:url(&#x27;/images/xj_k16.jpg&#x27;);"></div>';
    expect(wrapper.find('.vehicle-info_image').exists()).to.equal(true);
    expect(wrapper.find('.vehicle-info_image').html()).to.equal(expected);
  });

});