import { dependencies } from "./package.json";
import type { ModuleFederationConfig } from "@rsbuild/core";

export const mfConfig: ModuleFederationConfig["options"] = {
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
};
