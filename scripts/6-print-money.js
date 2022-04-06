import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0xc8E43baE2c59bC19A0A0D2738E4D0D1D3CB26362");

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 0;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(10000000000);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$AFM in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();