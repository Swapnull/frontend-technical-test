const expect = require('chai').expect;
const { getVehicleList } = require('../../src/api');

const server = require('../../server');

describe("getVehicleList test", function() {
  let serverInstance;

  before(() => {
    serverInstance = server.listen(9988);
  });

  after(() => {
    serverInstance.close();
  });

  it('should respond with an array of vehicles', function(done) {
    getVehicleList().then(data => {
      expect(Array.isArray(data.vehicles)).to.equal(true);
      done();
    });
  })

  it('should contain the expected properties', function(done) {
    getVehicleList().then(data => {
      const { vehicles } = data;
      vehicles.map(v => {
        expect(v).to.have.deep.property('id');
        expect(v).to.have.deep.property('url');
        expect(v).to.have.deep.property('media');
      });
      done();
    });
  });
});