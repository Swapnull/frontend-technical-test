import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getVehicle } from '../api';

export default class Vehicle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    getVehicle(this.props.id, vehicle => {
      this.setState({
        data: JSON.parse(vehicle)
      })
    });
  }

  render() {
    if (this.state.data) {
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

    return null;
  }
};

Vehicle.propTypes = {
  id: PropTypes.string.isRequired,
  media: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired

}