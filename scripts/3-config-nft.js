import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xA88D7B28DAB355FA9C530286DAeB8a807Bdc8E20");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Panda in glasses",
        description: "This NFT will give you access to jobDAO!",
        image: readFileSync("scripts/assets/job.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();