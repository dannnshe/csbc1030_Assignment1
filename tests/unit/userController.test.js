// Import Chai for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../index"); // Express app
const expect = chai.expect;

chai.use(chaiHttp);

// User Controller unit tests
describe("User Controller Unit Tests", () => {
  // Test: Retrieve the authenticated user's entity
  it("should retrieve the user entity for the authenticated user", (done) => {
    chai
      .request(app)
      .get("/users/1") // Fetch user with ID 1
      .end((err, res) => {
        expect(res).to.have.status(200); // Check for success response
        done();
      });
  });

  // Test: Prevent a user from accessing another user's entity
  it("should deny access to other user’s entity", (done) => {
    chai
      .request(app)
      .get("/users/2") // Attempt to fetch another user
      .end((err, res) => {
        expect(res).to.have.status(403); // Check for Forbidden response
        done();
      });
  });

  // Test: Require authentication for accessing user entity
  it("should require authentication to access user entity", (done) => {
    chai
      .request(app)
      .get("/users/1") // Attempt fetch without authentication
      .end((err, res) => {
        expect(res).to.have.status(401); // Check for Unauthorized response
        done();
      });
  });
});
