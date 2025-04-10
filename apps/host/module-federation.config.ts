import { dependencies } from "./package.json";
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export const mfConfig = createModuleFederationConfig({
  name: "shell",

  filename: "remoteEntry.js",
  remotes: {
    settings: "settings@http://localhost:3001/remoteEntry.js"
  },
  dts: true,
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: false
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false
    }
  }
});
