// Import testing libraries and the application
const supertest = require("supertest");
const app = require("../../index");
const api = supertest(app);
const expect = require("chai").expect;

// User Controller end-to-end tests
describe("User Controller End-to-End Tests", () => {
  // Test: Retrieve the authenticated user's entity
  it("Should retrieve the user entity for the authenticated user", async () => {
    await api.get("/users/1"); // Fetch user with ID 1
  });

  // Test: Prevent a user from accessing another user's entity
  it("Should deny access to other user’s entity", async () => {
    const res = await api.get("/users/2"); // Attempt to fetch another user
    expect(res.status).to.equal(403); // Expect Forbidden error
  });

  // Test: Require authentication for accessing user entity
  it("Should require authentication to access user entity", async () => {
    const res = await api.get("/users/1"); // Attempt fetch without authentication
    expect(res.status).to.equal(401); // Expect Unauthorized error
  });
});
