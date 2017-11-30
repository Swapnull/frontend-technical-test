const serviceHelper = url => {
	return new Promise((resolve, reject) => {
		if (!url) reject('No URL provided');

    const req = new XMLHttpRequest();
    req.open('GET', `http://localhost:9988${url}`);


    req.onreadystatechange = () => {
      if(req.readyState === 4) {
      	if(req.status === 200 && req.status < 300) {
          try {
            resolve(JSON.parse(req.responseText));
          } catch (err) {
            reject(`Error while hitting ${path}`);
          }
        } else { reject(req.response) };
      }
    };

    req.send();
  })
};

export const getVehicleList = () => serviceHelper('/api/vehicle');
export const getVehicleDetail = url => serviceHelper(url);