import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getVehicleDetail } from '../api';

export default class Vehicle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  async componentDidMount() {
    const vehicle = await getVehicleDetail(this.props.url);
    this.setState({ data: vehicle });
  }

  render() {
    const { id, media: [media] } = this.props;
    const { price, description } = this.state.data;
    return (
      <span className="vehicle-info">
        <div className="vehicle-info_image" style={{ backgroundImage: `url('${media.url}')` }}/>
        <div className="vehicle-info-details">
          <span className="vehicle-info-details_name">{ id.toUpperCase() }</span>
          <div className="vehicle-info-details_price">From { price }</div>
          <div className="vehicle-info-details_description">{description}</div>
        </div>
      </span>
    )

  }
};

Vehicle.propTypes = {
  id: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired
  })).isRequired

}