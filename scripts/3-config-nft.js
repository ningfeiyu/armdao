import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6E6f3D2381Ff1e8A2b313267a2559208A59b0B63");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "afmdao key",
        description: "This NFT will give you access to afmDAO!",
        image: readFileSync("scripts/assets/11.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();