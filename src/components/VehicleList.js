import React, { Component } from 'react';
import { getVehicleList } from '../api';
import Vehicle from './Vehicle';

export default class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

  async componentDidMount() {
    const vehicles = await getVehicleList();
    this.setState({ data: vehicles });
  }

	render() {
		if(this.state.data) {
			console.log(this.state.data);
			const vehicles = this.state.data.vehicles.map(vehicle => {
				return <li className="vehicle-list-item" key={vehicle.id}><Vehicle  id={vehicle.id} {...vehicle} /></li>;
			});

			console.log(vehicles)

			return (
				<ul className="vehicle-list">
					{vehicles}
				</ul>
			)
		}

		return (<h1>Loading...</h1>);
	}
}