import { dependencies } from "./package.json";
import { createModuleFederationConfig } from "@module-federation/enhanced";

export const mfConfig = createModuleFederationConfig({
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: false
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: false
    }
  }
});
