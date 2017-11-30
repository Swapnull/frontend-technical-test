
const expect = require('chai').expect;
const { getVehicleDetail } = require('../../src/api');

const server = require('../../server');

describe("getVehicleDetail test", function() {
  let serverInstance;

  before(() => {
    serverInstance = server.listen(9988);
  });

  after(() => {
    serverInstance.close();
  });

  it('should respond with an object', function(done) {
    getVehicleDetail('/api/vehicle/xe').then(data => {
      expect(typeof data).to.equal('object');
      done();
    });
  });

  it('should contain the expected properties', function(done) {
    getVehicleDetail('/api/vehicle/xe').then(data => {
      expect(data).to.have.deep.property('id');
      expect(data).to.have.deep.property('description');
      expect(data).to.have.deep.property('price');
      expect(data).to.have.deep.property('meta');
      done();
    });
  });

  it('rejects when no url is provided', done => {
    getVehicleDetail().then(data => {
    }, error => {
      expect(error).to.equal('No URL provided');
      done();
    });
  });
});