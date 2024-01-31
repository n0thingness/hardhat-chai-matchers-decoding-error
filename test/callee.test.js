const { expect } = require("chai");

let caller;
let callee;

describe("Callee", () => {
  beforeEach(async () => {
    const Caller = await ethers.getContractFactory("Caller");
    caller = await Caller.deploy();
    await caller.waitForDeployment();

    const Callee = await ethers.getContractFactory("Callee");
    callee = await Callee.deploy();
    await callee.waitForDeployment();
  });
  it("parses revertedWith reason when calling directly", async () => {
    await expect(
      callee.willRevert()
    ).to.be.revertedWith("reason for reverting");
  });
  it("parses revertedWith reason when calling indirectly", async () => {
    await expect(
      caller.call(
        await callee.getAddress(),
        callee.interface.encodeFunctionData(
          "willRevert()",
          []
        )
      )
    ).to.be.revertedWith("reason for reverting");
  });
});