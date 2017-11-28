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
      const { id, media } = this.props;
      const { price, description } = this.state.data;
      console.log(media[0])
      return (
        <span>
          <div className="vehicle-info_image" style={{ backgroundImage: `url('${media[0].url}')` }}/>
          <div className="vehicle-info">
            <span className="vehicle-info_name">{ id.toUpperCase() }</span>
            <div className="vehicle-info_price">From { price }</div>
            <div className="vehicle-info_description">{description}</div>
          </div>
        </span>
      )
    }

    return null;
  }
};