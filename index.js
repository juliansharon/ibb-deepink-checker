const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, response) => {
  response.send("deep link checker successfully loaded");
});

app.get("/.well-known/assetlinks.json", (req, response) => {
  response.send([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.tr.gov.ibb.istanbulsenin.test",
        sha256_cert_fingerprints: [
          "96:1F:ED:1A:1A:B4:48:2D:6B:2C:D3:4E:EB:3D:2C:5C:0E:8C:AD:EF:35:65:E6:08:DF:5C:2C:6E:7F:D5:86:4D",
        ],
      },
    },
  ]);
});
