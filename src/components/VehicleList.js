import React, { Component } from 'react';
import { getVehicleList } from '../api';
import Vehicle from './Vehicle';

export default class VehicleList extends Component {

	constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  async componentDidMount() {
    const { vehicles } = await getVehicleList();
    this.setState({ data: vehicles });
  }

	render() {
		const vehicles = this.state.data.map(vehicle => {
			return <li className="vehicle-list-item" key={vehicle.id}><Vehicle id={vehicle.id} {...vehicle} /></li>;
		});

		return (
			<ul className="vehicle-list">
				{vehicles}
			</ul>
		)
	}
}