const generateRandomId = require('../../src/utils/generateRandomId');

describe("Generate Unique ID", () => {
  it('should return a generated unique ID', () => {
    const id = generateRandomId();
    expect(id).toHaveLength(8);
  });
});