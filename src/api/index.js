/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getVehicleList = cb => {
    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
 		    if(vehicles.status === 200) {
 			    cb(vehicles.responseText);
		    }
		}
	};

	vehicles.send();
};

export const getVehicle = (id, cb) => {
		const vehicle = new XMLHttpRequest();
		vehicle.open('GET', `http://localhost:9988/api/vehicle/${id}`);

		vehicle.onreadystatechange = function() {
    	if (vehicle.readyState === 4) {
				if (vehicle.status === 200) cb(vehicle.responseText);
    	}
		};

		vehicle.send();
};